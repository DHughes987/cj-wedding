import React from "react";
// Card removed (not needed) to keep block-section background simple
import { Button } from "@/components/ui/button";

const GiftRegistry: React.FC = () => (
  <section data-reveal="left" data-delay="160" className="block-section">
    <div className="block-content text-center">
      <h3 className="text-2xl md:text-3xl font-heading mb-4">Gift Registry</h3>
      <p className="lead mb-6">Your presence is our present — but if you wish to give, here is our registry.</p>
      <Button asChild>
        <a href="https://www.example.com/registry" target="_blank" rel="noopener noreferrer">View Registry</a>
      </Button>
    </div>
  </section>
)
;

export default GiftRegistry;
