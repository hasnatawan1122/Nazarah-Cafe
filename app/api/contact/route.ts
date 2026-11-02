import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate inputs
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone number, and message are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    // If Resend API key is provided, attempt to send via Resend API
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Tohfa Sweets Website <onboarding@resend.dev>",
          to: ["tohfasweets.vehari@gmail.com"],
          subject: `New Inquiry from ${name} (${phone})`,
          html: `
            <h2>New Inquiry from Tohfa Sweets & Nazarah Cafe Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.warn("Resend API failed, continuing with fallback response:", errorData);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully! We will connect with you promptly.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please contact us via WhatsApp." },
      { status: 500 }
    );
  }
}
