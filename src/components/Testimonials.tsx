"use client";

import { Quote } from "lucide-react";
import { Reveal, RevealStagger, StaggerItem } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Claire found us three homes in our range within a week and talked us out of the one that would've been a mistake. That's the kind of honesty you want.",
    name: "The Alvarez Family",
    role: "Bought in Fairview",
  },
  {
    quote:
      "We listed on a Friday and had two offers over asking by Tuesday. PrimeEstate's pricing data was spot on.",
    name: "David & Wen Kim",
    role: "Sold in Millbrook",
  },
  {
    quote:
      "Renting through them was the smoothest process I've had in four different cities. Zero surprises.",
    name: "Jonah P.",
    role: "Rented Skyline Loft 12B",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-cream-dim py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Client Stories
          </span>
          <h2 className="mt-3 max-w-lg font-display text-4xl font-semibold text-navy sm:text-5xl">
            Trusted by buyers and sellers alike.
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-white p-8"
            >
              <div>
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-5 text-[0.95rem] leading-relaxed text-stone">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8 border-t border-line pt-5">
                <p className="font-display text-lg text-navy">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-stone/70">
                  {t.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
