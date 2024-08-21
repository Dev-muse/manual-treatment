import Clients from "./_components/Clients";
import Hero from "./_components/Hero";
import Remedies from "./_components/Remedies";
import Testimonial from "@/app/_components/testimonials";
import Reviews from "@/app/_components/ui/Reviews";
import FAQs from "@/app/_components/FAQs";
import Footer from "@/app/_components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Remedies />
      <Clients />
      <FAQs />
      <Footer />
    </>
  );
}
