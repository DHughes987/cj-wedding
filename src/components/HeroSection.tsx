import React from "react";

const HeroSection: React.FC = () => (
  <section className="hero relative flex items-center justify-center min-h-[80vh] w-full overflow-hidden bg-blush hero-overlay">
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

    <div className="hero-contents relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-24">
      <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold text-center text-navy big-hero-shadow mb-6">
        Caroline & Johnathon
      </h1>
      <h2 className="text-2xl md:text-3xl font-heading text-center text-gold mb-4">
        Invite you to celebrate their wedding
      </h2>
      <p className="text-lg md:text-xl text-center text-foreground mb-6">
        September 12, 2026 &mdash; Willow Creek Estate
      </p>
      <div className="divider w-1/2 mx-auto mb-6" />

      <a className="hero-cta pulse" href="#rsvp">RSVP</a>
    </div>
  </section>
)
;

export default HeroSection;
