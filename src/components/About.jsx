import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section id="about" className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">About</h2>
          <p className="mt-4 text-gray-300">
            Casual_Cultureee is a Makassar-based thrift brand sharing branded second-hand pieces that are 100% original. Each item is inspected before listing. TNF Hitam Makassar 354.
          </p>
        </div>
        <div data-aos="zoom-in" className="relative">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
            alt="Behind the scenes — sorting and inspecting thrift items"
            className="w-full h-72 object-cover rounded-xl shadow-2xl ring-1 ring-white/10"
            loading="lazy"
          />
          <div className="absolute -bottom-3 -left-3 bg-black/70 border border-white/10 rounded-md px-3 py-1 text-[11px] text-gray-300">
            Check size & condition — DM to confirm
          </div>
        </div>
      </div>
    </section>
  );
}
