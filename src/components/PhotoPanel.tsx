import React from "react";
import { Card } from "@/components/ui/card";

const PhotoPanel: React.FC<{ src?: string; alt?: string; caption?: string }> = ({ src, alt = "Photo", caption }) => (
  <div className="w-full h-full">
    <Card className="w-full h-full p-0 overflow-hidden transform transition-shadow hover:shadow-2xl hover:-translate-y-1">
      <div className="relative w-full h-64 md:h-full">
        <img
          src={src || "https://placehold.co/800x600?text=Photo"}
          alt={alt}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-40" />
      </div>
      {caption && <div className="px-4 py-3 text-center text-muted-foreground">{caption}</div>}
    </Card>
  </div>
);

export default PhotoPanel;
