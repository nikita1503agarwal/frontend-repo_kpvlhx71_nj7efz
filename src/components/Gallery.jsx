import React, { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WHATSAPP_BASE = 'https://wa.me/62089529855060';

const sampleItems = [
  {
    id: 1,
    title: 'TNF Hitam Makassar 354',
    price: 'Rp 245.000',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Black The North Face jacket on hanger',
    desc: 'Original 100% — condition 9/10, detail minor, check photos.'
  },
  {
    id: 2,
    title: 'Stussy Old Tee Navy',
    price: 'Rp 175.000',
    img: 'https://images.unsplash.com/photo-1511131341194-24e2eeeebb88?q=80&w=1200&auto=format&fit=crop',
    alt: 'Vintage navy streetwear tee on flatlay',
    desc: 'Soft cotton, fade nice, tag on point.'
  },
  {
    id: 3,
    title: 'Carhartt Chore Jacket',
    price: 'Rp 390.000',
    img: 'https://images.unsplash.com/photo-1520975823338-b818d9d268ca?q=80&w=1200&auto=format&fit=crop',
    alt: 'Brown chore jacket on street wall',
    desc: 'Heavy canvas, workwear classic. See sizing.'
  },
  {
    id: 4,
    title: 'Nike ACG Hoodie',
    price: 'Rp 320.000',
    img: 'https://images.unsplash.com/photo-1617050355280-a69cf2b8ab96?q=80&w=1200&auto=format&fit=crop',
    alt: 'Gray hoodie with subtle graphic',
    desc: 'Cozy fleece, minimal crack, clean cuff.'
  }
];

function makeWaLink(itemName) {
  const text = `Halo Casual_Cultureee, saya mau tanya produk [${itemName}]`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const gridCols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

  return (
    <section id="gallery" className="bg-[#0b0b0b] text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex items-end justify-between mb-8" data-aos="fade-up">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Casual_Cultureee</h2>
            <p className="text-gray-400 text-sm mt-1">Drop feed — tap to zoom, chat to buy.</p>
          </div>
        </header>

        <div className={`grid ${gridCols} gap-6`}>
          {sampleItems.map((item) => (
            <article
              key={item.id}
              className="rounded-lg overflow-hidden shadow-lg bg-black/60 border border-white/10 transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
            >
              <button
                className="block w-full focus:outline-none"
                onClick={() => setLightbox(item)}
                aria-label={`Open ${item.title} preview`}
              >
                <img src={item.img} alt={item.alt} className="w-full h-64 object-cover" loading="lazy" />
              </button>
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-red-400 text-sm mt-1">{item.price}</p>
                <div className="mt-3 flex gap-3">
                  <a
                    href={makeWaLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-xs font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
                    aria-label={`Chat to buy ${item.title} on WhatsApp`}
                  >
                    Chat to Buy
                  </a>
                  <button
                    onClick={() => setLightbox(item)}
                    className="inline-flex items-center rounded-md border border-white/20 px-3 py-2 text-xs hover:bg-white/10"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {lightbox && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div className="relative w-full max-w-3xl bg-[#0e0e0e] border border-white/10 rounded-xl shadow-2xl overflow-hidden" data-aos="zoom-in">
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white/90 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close lightbox"
              >
                ✕
              </button>
              <img src={lightbox.img} alt={lightbox.alt} className="w-full max-h-[70vh] object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{lightbox.title}</h3>
                <p className="text-gray-300 mt-1">{lightbox.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-red-400 font-semibold">{lightbox.price}</span>
                  <a
                    href={makeWaLink(lightbox.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
                    aria-label={`Buy ${lightbox.title} via WhatsApp`}
                  >
                    Buy via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
