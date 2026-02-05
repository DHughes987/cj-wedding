import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import GiftRegistry from "./components/GiftRegistry";
import PhotoPanel from "./components/PhotoPanel";
import Footer from "./components/Footer";

export function App() {
  return (
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">

  {/* 1: Nav */}
  <div className="w-full md:col-span-5 md:row-start-1">
    <Header />
  </div>

  {/* 2: Hero */}
  <div className="w-full md:col-span-5 md:row-start-2">
    <HeroSection />
  </div>

  {/* 3: Details (left) */}
  <div className="w-full md:col-span-3 md:col-start-3 md:row-start-3">
    <EventDetails />
  </div>

  {/* 4: Photo 1 (right) */}
  <div className="w-full md:col-span-2 md:row-start-3">
    <PhotoPanel src="https://placehold.co/800x600?text=Couple+Photo" caption="Caroline & Johnathon" />
  </div>

  {/* 5: RSVP (big left) */}
  <div className="w-full md:col-span-3 md:row-start-4">
    <RSVP />
  </div>

  {/* 6: Photo 2 (right small) */}
  <div className="w-full md:col-span-2 md:col-start-4 md:row-start-4">
    <PhotoPanel src="https://placehold.co/800x600?text=Engagement+Photo" caption="Moments Together" />
  </div>

  {/* 7: Registry (left bottom) */}
  <div className="w-full md:col-span-2 md:row-start-5">
    <GiftRegistry />
  </div>

  {/* 8: Gallery (right bottom) */}
  <div className="w-full md:col-span-3 md:col-start-3 md:row-start-5">
    <Gallery />
  </div>

  {/* 9: Map placeholder */}
  <div className="w-full md:col-span-5">
    <div className="w-full h-64 md:h-80 flex items-center justify-center bg-card text-muted-foreground rounded-lg">
      Map placeholder (venue location)
    </div>
  </div>

  {/* Footer */}
  <div className="w-full md:col-span-5">
    <Footer />
  </div>
  </div>

  );
}

export default App;
