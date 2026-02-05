import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import GiftRegistry from "./components/GiftRegistry";
import Footer from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <HeroSection />
      <EventDetails />
      <RSVP />
      <Gallery />
      <GiftRegistry />
      <Footer />
    </div>
  );
}

export default App;
