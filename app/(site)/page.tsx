// app/(site)/page.tsx
import Hero from "@/app/_components/Hero";
import Remedies from "@/app/_components/Remedies";
import Clients from "@/app/_components/Clients";
import FAQs from "@/app/_components/FAQs";
import CTA from "@/app/_components/CTA";
import type { HomePageData } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  // Fetch everything from Sanity in a single parallel request
  const { data } = await sanityFetch({ query: HOME_PAGE_QUERY }) as { data: HomePageData };
  
  // Extract data nodes with fallbacks in case CMS fields are empty
  const pageData = data?.pageData || {};
  const conditions = data?.conditions || [];
  const faqs = data?.faqs || [];
  const testimonials = data?.testimonials || [];

  return (
    <>
      <Hero 
        eyebrow={pageData.heroEyebrow}
        headingParts={pageData.heroHeadingParts}
        description={pageData.heroDescription}
      />
      <Remedies 
        eyebrow={pageData.remediesEyebrow}
        headingParts={pageData.remediesHeadingParts}
        description={pageData.remediesDescription}
        listTitle={pageData.remediesListTitle}
        videoPoster={pageData.remediesVideoPoster}
        videoUrl={pageData.remediesVideoUrl}
        conditions={conditions}
      />
      <Clients 
        headingText={pageData.clientsHeading}
        descriptionText={pageData.clientsDescription}
        testimonialsData={testimonials}
      />
      <FAQs 
        items={faqs}
      />
      <CTA 
        heading={pageData.ctaHeading}
        description={pageData.ctaDescription}
        image={pageData.ctaImage}
      />
    </>
  );
}