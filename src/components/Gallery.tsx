import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const images = [
  "https://placehold.co/600x400?text=Caroline+%26+Johnathon+1",
  "https://placehold.co/600x400?text=Caroline+%26+Johnathon+2",
  "https://placehold.co/600x400?text=Caroline+%26+Johnathon+3",
];

type GalleryProps = {
  auto?: boolean;
  interval?: number;
}

const Gallery: React.FC<GalleryProps> = ({ auto = false, interval = 3500 }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  // autoplay
  useEffect(() => {
    if (!auto) return
    const id = setInterval(() => setCurrent(c => (c + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [auto, interval])

  return (
    <section data-reveal="right" data-delay="120" className="block-section w-full">
      <div className="block-content flex flex-col items-center w-full">
        <h3 className="text-2xl md:text-3xl font-heading mb-4">Gallery</h3>
        <Card className="w-full flex-1 flex flex-col items-center p-0 overflow-hidden shadow-soft card">
          <div className="relative w-full flex-1 flex items-center justify-center">
          <img
            src={images[current]}
            alt={`Wedding ${current + 1}`}
            className="object-cover w-full h-full rounded-xl transition-all duration-500"
          />
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-blush text-navy rounded-full px-3 py-2 shadow-gold hover:bg-gold transition"
            aria-label="Previous"
          >&#8592;</button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-blush text-navy rounded-full px-3 py-2 shadow-gold hover:bg-gold transition"
            aria-label="Next"
          >&#8594;</button>
          </div>
          <div className="flex justify-center gap-2 py-4">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`inline-block w-3 h-3 rounded-full ${idx === current ? 'bg-gold' : 'bg-muted'} transition`}
            />
          ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Gallery;
