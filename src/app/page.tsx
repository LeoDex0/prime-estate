import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import WhyUs from "@/components/WhyUs";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Listings />
        <WhyUs />
        <Agents />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
