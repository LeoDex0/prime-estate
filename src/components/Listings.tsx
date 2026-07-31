"use client";

import Image from "next/image";
import { Bath, Bed, Ruler } from "lucide-react";
import { LISTINGS } from "@/data/listings";
import { Reveal } from "./Reveal";

export default function Listings() {
  return (
    <section id="listings" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                Featured Listings
              </span>
              <h2 className="mt-3 max-w-lg font-display text-4xl font-semibold text-navy sm:text-5xl">
                Homes worth a second look.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-stone">
              A curated selection of our current listings, updated weekly.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {LISTINGS.map((listing, i) => (
            <Reveal key={listing.slug} delay={(i % 3) * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-cream">
                    {listing.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {listing.title}
                    </h3>
                    <span className="shrink-0 font-display text-lg font-semibold text-gold-deep">
                      {listing.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-stone">{listing.address}</p>
                  <div className="mt-5 flex items-center gap-5 border-t border-line pt-4 text-sm text-stone">
                    <span className="flex items-center gap-1.5">
                      <Bed className="h-4 w-4 text-navy/60" />
                      {listing.beds} bd
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-navy/60" />
                      {listing.baths} ba
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="h-4 w-4 text-navy/60" />
                      {listing.sqft.toLocaleString("en-US")} sqft
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
