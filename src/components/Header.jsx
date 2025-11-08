import React from 'react';

const WHATSAPP_URL = 'https://wa.me/62089529855060';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <a href="#home" className="font-extrabold tracking-tight text-lg sm:text-xl">Casual_Cultureee</a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
          <a href="#gallery" className="hover:text-red-400 transition-colors">Gallery</a>
          <a href="#about" className="hover:text-red-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Chat via WhatsApp"
          >
            Chat via WhatsApp
          </a>
        </div>
        <div className="md:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Chat via WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
