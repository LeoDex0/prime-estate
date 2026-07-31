"use client";

import { BadgeCheck, Handshake, LineChart, ShieldCheck } from "lucide-react";
import { RevealStagger, StaggerItem } from "./Reveal";

const POINTS = [
  {
    icon: BadgeCheck,
    title: "Vetted Listings",
    description:
      "Every property is inspected and verified before it goes live, so what you see is what you get.",
  },
  {
    icon: LineChart,
    title: "Local Market Data",
    description:
      "Pricing backed by real, up-to-date comparables in the neighborhoods we actually work in.",
  },
  {
    icon: Handshake,
    title: "Dedicated Agent",
    description:
      "One point of contact from first viewing to closing day, not a rotating call center.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Fees",
    description:
      "No surprise costs. Every fee is disclosed up front, in writing, before you sign anything.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RevealStagger>
          <StaggerItem>
            <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
              Why PrimeEstate
            </span>
            <h2 className="mt-3 max-w-lg font-display text-4xl font-semibold text-cream sm:text-5xl">
              Real estate, done properly.
            </h2>
          </StaggerItem>
        </RevealStagger>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title} className="flex flex-col gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-gold-bright">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-semibold text-cream">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">
                  {point.description}
                </p>
              </StaggerItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
