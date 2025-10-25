import React from "react";
import { MapPin, Shield, Gem } from "lucide-react";

export default function LegacySection() {
  return (
    <section id="legacy" className="bg-[#f8f6f2]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#7a5a2e]">The Basak Legacy</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0a2540] sm:text-3xl">Heritage of Kalighat. Generations of Trust.</h2>
            <p className="mt-3 text-neutral-700">
              Rooted in Kolkata’s cultural heart, our Kalighat showroom carries forward decades of artisanal excellence. From intricate filigree to modern diamond statements, each creation is a testament to precision and integrity.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-amber-200 bg-white p-4">
                <div className="flex items-center gap-2 text-[#7a5a2e]">
                  <Shield className="h-5 w-5" />
                  <h3 className="font-medium">Hallmarked & Certified</h3>
                </div>
                <p className="mt-1 text-sm text-neutral-600">916 Hallmarked Gold and IGI/GIA certified diamonds for complete confidence.</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-white p-4">
                <div className="flex items-center gap-2 text-[#7a5a2e]">
                  <Gem className="h-5 w-5" />
                  <h3 className="font-medium">Craftsmanship First</h3>
                </div>
                <p className="mt-1 text-sm text-neutral-600">Hand-finished detailing: filigree, nakshi, and stone-setting perfected over generations.</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-amber-100">
              <MapPin className="h-5 w-5 text-[#7a5a2e]" />
              <div>
                <p className="text-sm font-medium text-[#0a2540]">112, Shyama Prasad Mukherjee Rd, Kalighat, Kolkata, 700026</p>
                <p className="text-xs text-neutral-600">Visit our flagship for a personalized consultation.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-200 bg-white/70 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_0%,rgba(176,141,87,0.25)_0%,transparent_60%)]" />
            <div className="relative z-10">
              <p className="text-sm font-medium text-[#7a5a2e]">A Living Timeline</p>
              <ol className="mt-4 space-y-4">
                <li className="rounded-lg bg-[#fffaf1] p-4 ring-1 ring-amber-200">
                  <p className="text-sm font-semibold text-[#0a2540]">Foundational Years</p>
                  <p className="mt-1 text-sm text-neutral-700">Establishing trust in Kalighat with traditional Bengali bridal sets and heirloom restorations.</p>
                </li>
                <li className="rounded-lg bg-[#fffaf1] p-4 ring-1 ring-amber-200">
                  <p className="text-sm font-semibold text-[#0a2540]">Design Evolution</p>
                  <p className="mt-1 text-sm text-neutral-700">Introducing contemporary diamond lines while preserving classical artistry.</p>
                </li>
                <li className="rounded-lg bg-[#fffaf1] p-4 ring-1 ring-amber-200">
                  <p className="text-sm font-semibold text-[#0a2540]">Modern Flagship</p>
                  <p className="mt-1 text-sm text-neutral-700">Mobile-first digital experience with private consultation bookings and bespoke commissions.</p>
                </li>
              </ol>
              <p className="mt-4 text-xs text-neutral-500">Ask about our restoration and redesign services to revive heritage pieces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
