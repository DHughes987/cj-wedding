import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const RSVP: React.FC = () => (
  <section className="py-8 flex justify-center">
    <Card className="max-w-md p-6">
      <h3 className="text-xl font-semibold mb-4">RSVP</h3>
      <form className="flex flex-col gap-4">
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Email Address" required />
        <Input type="number" placeholder="Number of Guests" min={1} required />
        <Button type="submit">Submit RSVP</Button>
      </form>
    </Card>
  </section>
);

export default RSVP;
