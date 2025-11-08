import React from 'react';

const WHATSAPP_URL = 'https://wa.me/62089529855060';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© 2025 Casual_Cultureee — Owner: @rifqisulthonx_</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://www.instagram.com/casual_cultureee/" target="_blank" rel="noreferrer" className="hover:text-red-400">Instagram</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-red-400">WhatsApp</a>
        </div>
        <p className="text-xs text-gray-500">Images use descriptive alt text; buttons are keyboard accessible.</p>
      </div>
    </footer>
  );
}
