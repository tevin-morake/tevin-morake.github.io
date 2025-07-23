import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Articles from "@/components/Articles";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Articles />
      <Testimonials />
      {/* Other sections will be added here */}
    </main>
  );
}
