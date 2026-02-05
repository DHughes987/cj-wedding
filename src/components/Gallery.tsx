import React from "react";
import { Card } from "@/components/ui/card";

const Gallery: React.FC = () => (
  <section className="py-8 flex flex-wrap justify-center gap-4">
    {/* Replace with actual images */}
    {[1,2,3].map((img) => (
      <Card key={img} className="w-64 h-40 flex items-center justify-center bg-muted">
        <span className="text-muted-foreground">Photo {img}</span>
      </Card>
    ))}
  </section>
);

export default Gallery;
