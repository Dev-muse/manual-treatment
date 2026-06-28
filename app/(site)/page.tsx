import CTA from "@/app/_components/CTA";
import FAQs from "@/app/_components/FAQs";
import Clients from "@/app/_components/Clients";
import Hero from "@/app/_components/Hero";
import Remedies from "@/app/_components/Remedies";

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
