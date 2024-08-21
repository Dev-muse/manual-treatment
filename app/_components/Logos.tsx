"use client";
import Image from "next/image";
import Medisave from "@/public/Medisave-Logo.png";
import ABMT from "@/public/abmt-logo.jpg";
import Kent from "@/public/University_of_Kent_logo.svg";
import GCMT from "@/public/logo-gcmt.png";
import LCSP from "@/public/LCSP_Register__Est_1919_blue.svg";
import MTI from "@/public/mti@2x.png";

export default function Logos() {
  return (
    <div className="bg-white py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-md font-semibold leading-8 text-gray-900">
          Trusted by the world&apos;s leading institutions
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="ABMT logo"
            src={ABMT}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Kent university logo"
            src={Kent}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="GCMT logo"
            src={GCMT}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="MTI logo"
            src={MTI}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="LCSP logo"
            src={LCSP}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
