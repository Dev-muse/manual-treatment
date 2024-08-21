"use client";
import acmeLogo from "@/app/assets/logo-acme.png";
import quantumLogo from "@/app/assets/logo-quantum.png";
import echoLogo from "@/app/assets/logo-echo.png";
import celestialLogo from "@/app/assets/logo-celestial.png";
import pulseLogo from "@/app/assets/logo-pulse.png";
import apexLogo from "@/app/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

// logos
import Medisave from "@/public/Medisave-Logo.png";
import ABMT from "@/public/abmt-logo.jpg";
import Kent from "@/public/kent-university.png";
import GCMT from "@/public/logo-gcmt.png";
import LCSP from "@/public/LCSP_Register.png";
import MTI from "@/public/mti@2x.png";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <h2 className="text-center text-md mb-8 font-semibold leading-8 text-gray-900">
          Trusted by leading institutions:
        </h2>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={Medisave}
              alt="Medisave Logo"
              className="logo-ticker-image"
            />
            <Image src={ABMT} alt="ABMT Logo" className="logo-ticker-image" />
            <Image src={GCMT} alt="GCMT Logo" className="logo-ticker-image" />
            <Image
              src={Kent}
              alt="Kent university Logo"
              className="logo-ticker-image"
            />
            <Image src={LCSP} alt="LCSP Logo" className="logo-ticker-image" />
            <Image src={MTI} alt="MTI logo" className="logo-ticker-image" />

            {/* Second set of logos for animation */}
            <Image
              src={Medisave}
              alt="Medisave Logo"
              className="logo-ticker-image"
            />
            <Image src={ABMT} alt="ABMT Logo" className="logo-ticker-image" />
            <Image src={GCMT} alt="GCMT Logo" className="logo-ticker-image" />
            <Image
              src={Kent}
              alt="Kent university Logo"
              className="logo-ticker-image"
            />
            <Image src={LCSP} alt="LCSP Logo" className="logo-ticker-image" />
            <Image src={MTI} alt="MTI logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
