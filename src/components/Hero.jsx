import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WHATSAPP_URL = 'https://wa.me/62089529855060';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section id="home" className="relative isolate min-h-[90vh] pt-24 pb-12 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,0,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_35%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <span className="inline-block mb-4 rounded-full bg-red-600/20 text-red-400 border border-red-500/40 px-3 py-1 text-xs font-bold tracking-wider">
            ‼️ TELITI SEBELUM MEMBELI ‼️
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Second Original 100% — Thrift Smart, Dress Sharp.
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Casual_Cultureee — drops from Makassar. Payment via SeaBank / Dana / BCA. Shipping J&T / JNE. Check size & condition — DM to confirm.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#gallery" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400">
              Shop Now
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400" aria-label="Chat to Buy on WhatsApp">
              Chat to Buy
            </a>
          </div>
        </div>
        <div className="relative" data-aos="fade-left" data-aos-duration="700" data-aos-once="true">
          <img
            src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop"
            alt="Urban streetwear outfit in moody city backdrop"
            className="w-full h-[420px] object-cover rounded-xl shadow-2xl ring-1 ring-white/10"
            loading="eager"
          />
          <div className="absolute -bottom-4 -left-4 bg-black/70 border border-white/10 rounded-lg px-4 py-2 text-xs text-gray-300">
            Owner: @rifqisulthonx_
          </div>
        </div>
      </div>
    </section>
  );
}
