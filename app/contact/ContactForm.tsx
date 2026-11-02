"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your inquiry or order details.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // 1. Post to internal API route (in case RESEND_API_KEY is active)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Silently continue to WhatsApp / mailto fallback
      });

      // 2. Open pre-filled WhatsApp message
      const text = `*New Website Inquiry*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${
        formData.email || "N/A"
      }\n*Message:* ${formData.message}`;

      const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;

      window.open(whatsappUrl, "_blank");

      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#EEDFCD] shadow-soft">
      <h3 className="font-heading text-2xl font-bold text-chocolate mb-2">
        Send Us a Message
      </h3>
      <p className="text-xs sm:text-sm text-chocolate/75 font-body mb-6">
        Fill out this form to instantly connect with our counter team via WhatsApp or email.
      </p>

      {submitted && (
        <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Thank You! Your message was prepared.</p>
            <p className="mt-0.5 text-emerald-700">
              WhatsApp has opened with your details. Our staff will respond right away.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name field */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-chocolate/80 mb-1">
            Your Name <span className="text-maroon">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Tariq Mehmood"
            className={`w-full rounded-xl border bg-cream/40 px-4 py-2.5 text-base sm:text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-hidden focus:ring-1 ${
              errors.name ? "border-maroon focus:ring-maroon" : "border-[#DDCBB5] focus:ring-gold"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-maroon flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
            </p>
          )}
        </div>

        {/* Phone field */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-chocolate/80 mb-1">
            Phone / WhatsApp Number <span className="text-maroon">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 0323 1234567"
            className={`w-full rounded-xl border bg-cream/40 px-4 py-2.5 text-base sm:text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-hidden focus:ring-1 ${
              errors.phone ? "border-maroon focus:ring-maroon" : "border-[#DDCBB5] focus:ring-gold"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-maroon flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Email field (optional) */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-chocolate/80 mb-1">
            Email Address <span className="text-chocolate/40 text-[10px] font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. tariq@gmail.com"
            className={`w-full rounded-xl border bg-cream/40 px-4 py-2.5 text-base sm:text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-hidden focus:ring-1 ${
              errors.email ? "border-maroon focus:ring-maroon" : "border-[#DDCBB5] focus:ring-gold"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-maroon flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
            </p>
          )}
        </div>

        {/* Message field */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-chocolate/80 mb-1">
            Order Details or Message <span className="text-maroon">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us what you'd like to order, or ask about custom cakes, party catering, and table bookings..."
            className={`w-full rounded-xl border bg-cream/40 px-4 py-2.5 text-base sm:text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-hidden focus:ring-1 ${
              errors.message ? "border-maroon focus:ring-maroon" : "border-[#DDCBB5] focus:ring-gold"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-maroon flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-white shadow-soft hover:bg-gold-dark transition-all disabled:opacity-50 cursor-pointer"
          >
            <Send className="h-4 w-4" />
            <span>{isSubmitting ? "Connecting..." : "Submit & Send on WhatsApp"}</span>
          </button>

          <a
            href={`mailto:${siteConfig.email}?subject=Inquiry from Website&body=${encodeURIComponent(
              `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
            )}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-chocolate px-5 py-3 text-xs font-bold text-chocolate hover:bg-chocolate hover:text-cream transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Email Us</span>
          </a>
        </div>
      </form>
    </div>
  );
}

