import Image from "next/image";
import logo from "@/app/assets/logosaas.png";
import SocialX from "@/app/assets/social-x.svg";
import SocialInsta from "@/app/assets/social-insta.svg";
import SocialLinkedIn from "@/app/assets/social-linkedin.svg";
import SocialPin from "@/app/assets/social-pin.svg";
import SocialYoutube from "@/app/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <span className="sr-only">Jim jackson - manual-treatment.co.uk</span>
          <p className=" ">
            <span className="text-white font-bold">Jim</span> Jackson
          </p>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Treatment</a>
          <a href="#">Blog</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Manual Therapy, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
