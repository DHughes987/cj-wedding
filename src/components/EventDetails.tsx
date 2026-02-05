import React from "react";
import { Card } from "@/components/ui/card";

const EventDetails: React.FC = () => (
  <section className="py-8 flex justify-center">
    <Card className="max-w-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Event Details</h3>
      <ul className="text-left">
        <li><strong>Date:</strong> September 12, 2026</li>
        <li><strong>Time:</strong> 4:00 PM</li>
        <li><strong>Venue:</strong> Willow Creek Estate, 123 Country Lane, Springfield</li>
        <li><strong>Schedule:</strong> Ceremony, Reception, Dinner & Dancing</li>
      </ul>
    </Card>
  </section>
);

export default EventDetails;
