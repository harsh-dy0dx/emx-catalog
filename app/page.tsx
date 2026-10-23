import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import QuickEnquiry from "../components/QuickEnquiry"; // <-- The new top banner!
import BentoGrid from "../components/BentoGrid";
import ShopByBrand from "../components/ShopByBrand";
import InteractiveCatalog from "../components/InteractiveCatalog";
import TrackOrder from "../components/TrackOrder";
import Reviews from "../components/Reviews";
import AboutSection from "../components/AboutSection";
import ContactInfo from "../components/ContactInfo";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />

      {/* Quick Enquiry is now front and center at the top! */}
      <QuickEnquiry />

      <BentoGrid />

      {/* NEW: Shop by Brand — pick a brand logo to dive into its full catalog */}
      <ShopByBrand />

      <InteractiveCatalog />
      <TrackOrder />
      <Reviews />

      {/* About Section is safely tucked at the bottom before Contact */}
      <AboutSection />

      <ContactInfo />
    </main>
  );
}
