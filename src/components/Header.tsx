import React from "react";

const Header: React.FC = () => (
  <header className="w-full flex items-center justify-between gap-6 py-6 px-4 md:px-8 lg:px-12">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-blush shadow-lg flex items-center justify-center text-navy font-semibold">C&J</div>
      <div className="hidden md:block">
        <h1 className="text-xl font-semibold">Caroline & Johnathon</h1>
        <p className="text-xs text-muted-foreground">December 5th, 2026 — Willow Creek Estate</p>
      </div>
    </div>

    <nav className="hidden md:flex items-center gap-6 text-sm">
      <a className="hover:text-gold transition" href="#details">Details</a>
      <a className="hover:text-gold transition" href="#gallery">Gallery</a>
      <a className="hover:text-gold transition" href="#rsvp">RSVP</a>
      <a className="hover:text-gold transition" href="#registry">Registry</a>
    </nav>

    <div className="hidden md:flex items-center gap-4">
      <a href="#rsvp" className="px-3 py-2 rounded-full bg-gradient-to-r from-blush/90 to-gold/80 text-navy shadow hover:scale-105 transition">RSVP</a>
    </div>
  </header>
);

export default Header;
