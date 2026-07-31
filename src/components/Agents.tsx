"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { AGENTS } from "@/data/agents";
import { Reveal } from "./Reveal";

export default function Agents() {
  return (
    <section id="agents" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Our Team
          </span>
          <h2 className="mt-3 max-w-lg font-display text-4xl font-semibold text-navy sm:text-5xl">
            Agents who know the block.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3">
          {AGENTS.map((agent, i) => (
            <Reveal key={agent.name} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {agent.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold-deep">{agent.role}</p>
                  <div className="mt-4 flex flex-col gap-2 border-t border-line pt-4 text-sm text-stone">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-2 transition-colors hover:text-navy"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 transition-colors hover:text-navy"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {agent.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
