import React from "react";

const HeroSection: React.FC = () => (
  <section className="hero relative flex items-center justify-center w-full min-h-[68vh] md:min-h-[72vh] lg:min-h-[80vh] overflow-hidden bg-blush hero-overlay">
    {/* background layer (slow) */}
    <img
      src="https://placehold.co/1600x1000?text=Couple+Background"
      alt="Caroline & Johnathon background"
      className="hero-layer hero-bg absolute inset-0 w-full h-full object-cover opacity-60"
      data-parallax
      data-speed="0.12"
    />

    {/* subtle CSS glow layer (replaces the texture image) */}
    <div
      className="hero-layer hero-glow absolute inset-0"
      data-parallax
      data-speed="0.22"
      aria-hidden
    />

    <div className="hero-contents relative z-10 flex flex-col items-center justify-center w-full px-6 py-20 md:py-24">
      <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-center text-navy big-hero-shadow mb-4 md:mb-6 tracking-tight transform-gpu will-change-transform" data-reveal="up">
        Caroline & Johnathon
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-heading text-center text-gold mb-3 md:mb-4 opacity-95" data-reveal="up" data-delay="80">
        Invite you to celebrate their wedding
      </h2>
      <p className="text-sm md:text-lg text-center text-foreground mb-6 max-w-2xl" data-reveal="up" data-delay="160">
        December 5th, 2026 &mdash; Willow Creek Estate
      </p>
      <div className="divider w-24 mx-auto mb-6 opacity-40 rounded-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="flex gap-4">
        <a className="hero-cta pulse inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blush to-gold text-navy shadow-lg hover:scale-105 transform transition" href="#rsvp">RSVP</a>
        <a className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-muted hover:border-gold text-sm transition" href="#details">Details</a>
      </div>
    </div>
  </section>
)
;

export default HeroSection;
