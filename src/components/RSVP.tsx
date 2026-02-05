import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const RSVP: React.FC = () => (
  <section data-reveal="right" data-delay="200" className="block-section">
    <div className="block-content">
      <h3 className="text-2xl md:text-3xl font-heading mb-4">RSVP</h3>
      <p className="lead mb-6">Please let us know if you can join us.</p>
      <Card className="max-w-md p-6 card mx-auto transform transition hover:-translate-y-1 hover:shadow-lg">
        <form className="flex flex-col gap-4">
          <Input className="focus:ring-gold" type="text" placeholder="Your Name" required />
          <Input className="focus:ring-gold" type="email" placeholder="Email Address" required />
          <Input className="focus:ring-gold" type="number" placeholder="Number of Guests" min={1} required />
          <Button type="submit" className="bg-gradient-to-r from-blush to-gold text-navy hover:brightness-105">Submit RSVP</Button>
        </form>
      </Card>
    </div>
  </section>
)
;

export default RSVP;
