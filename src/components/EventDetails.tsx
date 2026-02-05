import React from "react";
import { Card } from "@/components/ui/card";

const EventDetails: React.FC = () => (
  <section id="details" data-reveal="left" data-delay="80" className="block-section">
    <div className="block-content">
      <Card className="card hover:shadow-lg transition-transform transform hover:-translate-y-1">
        <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Event Details</h3>
        <p className="lead mb-4">Join us to celebrate on December 5th, 2026 at Willow Creek Estate.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <div>
            <p className="text-sm"><strong>Date</strong></p>
            <p className="text-muted-foreground">December 5th, 2026</p>
          </div>
          <div>
            <p className="text-sm"><strong>Time</strong></p>
            <p className="text-muted-foreground">4:00 PM</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm"><strong>Venue</strong></p>
            <p className="text-muted-foreground">Willow Creek Estate, 123 Country Lane, Springfield</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm"><strong>Schedule</strong></p>
            <p className="text-muted-foreground">Ceremony, Reception, Dinner & Dancing</p>
          </div>
        </div>
      </Card>
    </div>
  </section>
)
;

export default EventDetails;
