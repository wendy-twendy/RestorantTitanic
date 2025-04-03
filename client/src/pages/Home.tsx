import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <About />
      <Gallery />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}
