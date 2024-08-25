import React from "react";
import Meet from "@/app/_components/Meet";
import BookButton from "../_components/BookButton";

const page = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <Meet />
        <BookButton />
      </div>
    </section>
  );
};

export default page;
