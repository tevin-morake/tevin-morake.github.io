import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Articles from "@/components/Articles";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Articles />
      <Testimonials />
      <About />
      <Contact />
      {/* Other sections will be added here */}
    </main>
  );
}
