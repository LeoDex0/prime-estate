"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { MapPin, Search, Home as HomeIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const [query, setQuery] = useState("");
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) lenis?.scrollTo(el as HTMLElement, { offset: -40, duration: 1.3 });
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-deep"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-16">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80"
          alt="Bright modern home exterior with pool"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,36,0.85)_0%,rgba(10,18,36,0.55)_45%,rgba(10,18,36,0.92)_100%)]" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-32 text-center sm:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cream/80"
        >
          <HomeIcon className="h-3.5 w-3.5" />
          Trusted Real Estate Since 2011
        </motion.div>

        <h1 className="max-w-3xl font-display text-[2.75rem] font-semibold leading-[1.05] text-cream sm:text-[4.5rem] lg:text-[5.5rem]">
          Find your next{" "}
          <span className="italic text-gold-bright">address.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-lg text-balance text-base text-cream/70 sm:text-lg"
        >
          A hand-picked portfolio of homes, condos and rentals, backed by a
          team of local agents who know every street they sell.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          className="mt-10 flex w-full max-w-2xl flex-col gap-3 rounded-2xl bg-cream p-3 shadow-2xl sm:flex-row sm:items-center sm:rounded-full sm:p-2 sm:pl-6"
        >
          <div className="flex flex-1 items-center gap-2 px-3 py-2 sm:px-0">
            <MapPin className="h-4 w-4 shrink-0 text-stone" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="City, neighborhood or ZIP"
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-stone/70"
            />
          </div>
          <button
            onClick={() => scrollTo("#listings")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-soft"
          >
            <Search className="h-4 w-4" />
            Search Homes
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-cream/15 pt-8"
        >
          <div>
            <p className="font-display text-2xl font-semibold text-gold-bright sm:text-3xl">
              1,200+
            </p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-cream/60">
              Homes Sold
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-semibold text-gold-bright sm:text-3xl">
              14
            </p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-cream/60">
              Years Local
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-semibold text-gold-bright sm:text-3xl">
              98%
            </p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-cream/60">
              Client Satisfaction
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
