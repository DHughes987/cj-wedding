import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GiftRegistry: React.FC = () => (
  <section className="py-8 flex justify-center">
    <Card className="max-w-md p-6">
      <h3 className="text-xl font-semibold mb-4">Gift Registry</h3>
      <Button asChild>
        <a href="https://www.example.com/registry" target="_blank" rel="noopener noreferrer">View Registry</a>
      </Button>
    </Card>
  </section>
);

export default GiftRegistry;
