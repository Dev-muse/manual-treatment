import CTA from "@/app/_components/CTA";
import FAQs from "@/app/_components/FAQs";
import Clients from "./_components/Clients";
import Hero from "./_components/Hero";
import Remedies from "./_components/Remedies";

export default function Home() {
  return (
    <>
      <Hero />
      <Remedies />
      <Clients />
      <FAQs />
      <CTA />
    </>
  );
}
