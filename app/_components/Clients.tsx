import React from "react";
import Testimonial from "./testimonials";
import Eyebrow from "./Eyebrow";
import Link from "next/link";
import BookButton from "./BookButton";

interface ClientsProps {
  headingText?: string;
  descriptionText?: string;
  testimonialsData?: Array<{
    name: string;
    username?: string;
    text: string;
    image?: any;
  }>;
}

const Clients = ({ headingText, descriptionText, testimonialsData }: ClientsProps) => {
  const currentColor = "#facc15";
  return (
    <section className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-2xl pt-8 pb-4">
        <div className="flex justify-center">
          <Eyebrow text="Testimonials" position="center" />
        </div>
        <div className="text-center">
          <h1 className=" text-6xl font-semibold tracking-normal text-gray-900 sm:text-6xl ">
            {headingText || "Why Our Patients Love Us"}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-500 text-md ">
            {descriptionText || "We're trusted by over 500 patients who now live a more pain free life thanks to manual treatment"}
          </p>
          <BookButton dark={false} />
        </div>
      </div>
      <Testimonial items={testimonialsData || []} />
    </section>
  );
};

export default Clients;
