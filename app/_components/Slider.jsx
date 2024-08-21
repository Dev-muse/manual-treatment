"use client";

import Slider from "react-slick";

import Image from "next/image";
import Slide1 from "@/public/slide1.jpg";
import Slide2 from "@/public/slide2.jpg";
import Slide3 from "@/public/slide3.jpg";
import Slide4 from "@/public/slide4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    // pauseOnHover:true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src={Slide1}
              alt="logo"
              width={500}
              height={1000}
              className="
                  rounded-2xl aspect-square
                      "
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src={Slide2}
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl aspect-square
                      "
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src={Slide3}
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl aspect-square
                      "
            />
          </div>
        </>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src={Slide4}
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl aspect-square
                      "
            />
          </div>
        </>
      </Slider>
    </div>
  );
};

export default HeroSlider;
