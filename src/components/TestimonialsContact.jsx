import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WHATSAPP_URL = 'https://wa.me/62089529855060';

export default function TestimonialsContact() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section id="contact" className="bg-[#0b0b0b] text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Testimonials</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              q: 'Barang ori, kondisi mantap. Seller fast response!'
            }, {
              q: 'Packing rapi, size sesuai, recommended bro.'
            }, {
              q: 'Harga masuk akal, kualitas oke. Repeat order!'
            }].map((t, idx) => (
              <blockquote key={idx} className="rounded-xl border border-white/10 bg-black/50 p-5 shadow-lg" data-aos="fade-up">
                <p className="text-gray-200">“{t.q}”</p>
                <span className="mt-3 inline-block text-xs text-gray-400">Verified buyer</span>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl border border-white/10 bg-black/50 p-6" data-aos="fade-right">
            <h3 className="text-xl font-bold">Contact & Payments</h3>
            <p className="text-gray-300 mt-2">Payments: SeaBank / Dana / BCA</p>
            <p className="text-gray-300">Shipping: J&T / JNE</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Open WhatsApp chat"
            >
              Chat via WhatsApp
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10" data-aos="fade-left">
            <div className="aspect-[16/9] bg-black">
              <iframe
                title="Makassar area map"
                src="https://www.google.com/maps?q=Makassar&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="bg-black/70 p-4 text-sm text-gray-300">
              Serves Makassar & nearby areas — shipping nationwide via J&T / JNE.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
