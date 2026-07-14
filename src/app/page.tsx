import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import EventSpace from "@/components/EventSpace";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <Booking />
        <EventSpace />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
