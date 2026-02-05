import React from "react";
import { Card } from "@/components/ui/card";

const EventDetails: React.FC = () => (
  <section data-reveal="left" data-delay="80" className="block-section">
    <div className="block-content">
      <Card className="card">
        <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Event Details</h3>
        <p className="lead mb-4">Join us to celebrate on December 5th, 2026 at Willow Creek Estate.</p>
        <ul className="text-left">
          <li><strong>Date:</strong> December 5th, 2026</li>
          <li><strong>Time:</strong> 4:00 PM</li>
          <li><strong>Venue:</strong> Willow Creek Estate, 123 Country Lane, Springfield</li>
          <li><strong>Schedule:</strong> Ceremony, Reception, Dinner & Dancing</li>
        </ul>
      </Card>
    </div>
  </section>
)
;

export default EventDetails;
