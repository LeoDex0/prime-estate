"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,168,106,0.14),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
            Get In Touch
          </span>
          <h2 className="mt-3 max-w-md font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            Ready to find your next address?
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
            Tell us what you're looking for and one of our agents will reach
            out within one business day.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:hello@primeestate.com"
              className="flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-gold-bright"
            >
              <Mail className="h-4 w-4 text-gold-bright" />
              hello@primeestate.com
            </a>
            <a
              href="tel:+12125550100"
              className="flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-gold-bright"
            >
              <Phone className="h-4 w-4 text-gold-bright" />
              +1 (212) 555-0100
            </a>
            <span className="flex items-center gap-3 text-sm text-cream/70">
              <MapPin className="h-4 w-4 text-gold-bright" />
              120 Fifth Avenue, New York, NY
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-5 rounded-2xl border border-cream/10 bg-navy-soft p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-cream/60">
                  Name
                </span>
                <input
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="rounded-lg border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none placeholder:text-cream/30 focus:border-gold-bright"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-cream/60">
                  Email
                </span>
                <input
                  required
                  type="email"
                  placeholder="jane@email.com"
                  className="rounded-lg border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none placeholder:text-cream/30 focus:border-gold-bright"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-cream/60">
                I'm looking to
              </span>
              <input
                type="text"
                placeholder="Buy, sell or rent..."
                className="rounded-lg border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none placeholder:text-cream/30 focus:border-gold-bright"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-cream/60">
                Message
              </span>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your budget and timeline..."
                className="resize-none rounded-lg border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none placeholder:text-cream/30 focus:border-gold-bright"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-bright px-7 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-cream"
            >
              {sent ? "Message Sent" : "Send Message"}
              {!sent && <ArrowRight className="h-4 w-4" strokeWidth={2.4} />}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
