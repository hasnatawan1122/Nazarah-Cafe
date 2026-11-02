import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Location | Tohfa Sweets & Nazarah Cafe",
  description:
    "Find Tohfa Sweets & Nazarah Cafe in Karkhana Bazar, F Block, Vehari. Call +92 323 6475550 or message via WhatsApp for orders and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHero
        badge="Reach Out &amp; Visit"
        title="We Would Love to Hear From You"
        subtitle="Visit our counter in Karkhana Bazar, stop by our drive-through, or message us directly on WhatsApp."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact info & hours */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                Location &amp; Details
              </span>
              <h2 className="font-heading text-3xl font-bold text-chocolate mt-1">
                Tohfa Sweets &amp; Nazarah Cafe
              </h2>
              <p className="mt-2 text-sm text-chocolate/75 font-body leading-relaxed">
                Located centrally in Vehari&apos;s bustling commercial heart. Easy access for parking, dining, or grabbing takeaway bakes.
              </p>
            </div>

            {/* Quick Detail Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-[#EEDFCD] shadow-2xs">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-chocolate">
                    Address
                  </h4>
                  <p className="text-sm text-chocolate/80 font-body mt-0.5">
                    {siteConfig.address}
                  </p>
                  <span className="text-xs text-maroon font-semibold block mt-1">
                    Near Main Market, F Block
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-[#EEDFCD] shadow-2xs">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold-dark">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-chocolate">
                    Phone &amp; WhatsApp
                  </h4>
                  <p className="text-sm font-body mt-0.5">
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="font-bold text-chocolate hover:text-gold transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p className="text-xs text-chocolate/60 mt-0.5">
                    Direct counter line for instant orders
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-[#EEDFCD] shadow-2xs">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-chocolate">
                    Opening Hours
                  </h4>
                  <p className="text-sm font-semibold text-maroon font-body mt-0.5">
                    Opens 6:00 AM Daily
                  </p>
                  <p className="text-xs text-chocolate/75 mt-0.5">
                    Monday to Sunday: 6:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-[#EEDFCD] shadow-2xs">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold-dark">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-chocolate">
                    Email Inquiries
                  </h4>
                  <p className="text-sm font-body mt-0.5">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-chocolate/80 hover:text-gold transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="rounded-2xl bg-cream-dark p-5 border border-[#DFCEBA]">
              <h4 className="font-heading text-sm font-bold text-chocolate mb-2">
                Connect on Social Media
              </h4>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-chocolate shadow-2xs hover:bg-gold hover:text-white transition-colors"
                >
                  <FacebookIcon className="h-4 w-4" /> Facebook
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-chocolate shadow-2xs hover:bg-gold hover:text-white transition-colors"
                >
                  <InstagramIcon className="h-4 w-4" /> Instagram
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2 text-xs font-semibold shadow-2xs hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>

      {/* Embedded Google Map Section */}
      <section className="pt-8 border-t border-[#EEDFCD]">
        <Container>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                Find Us on the Map
              </span>
              <h3 className="font-heading text-2xl font-bold text-chocolate">
                Karkhana Bazar, F Block, Vehari
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Karkhana+Bazar+Vehari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold-dark hover:text-chocolate uppercase tracking-wider"
            >
              <span>Open in Google Maps App</span>
            </a>
          </div>

          <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-[#DDCBB5] shadow-soft">
            <iframe
              title="Tohfa Sweets & Nazarah Cafe Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.883712869503!2d72.348889!3d30.045056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393c5d6c8b9d9999%3A0x1234567890abcdef!2sKarkhana%20Bazar%2C%20Vehari%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[20%] contrast-[105%]"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
