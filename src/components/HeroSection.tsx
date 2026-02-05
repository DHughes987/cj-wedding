import React from "react";
import { Card } from "@/components/ui/card";

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center py-10">
    <Card className="max-w-xl p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">Welcome to Our Wedding</h2>
      <p className="mb-4">We are so excited to celebrate this special day with you. Please explore the details below and RSVP to let us know you’ll be joining us!</p>
      {/* Add a photo or illustration here if desired */}
    </Card>
  </section>
);

export default HeroSection;
