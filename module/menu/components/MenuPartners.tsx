import { partners } from "@/common/constant/partners";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function MenuPartners() {
  return (
    <div className="flex items-center flex-col lg:flex-row bg-neutral-700 p-12 gap-y-8">
      <div className="text-white text-center">
        <h1 className={`${playfair.className} text-5xl mb-8`}>You can order through apps</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
      </div>
      <div className="grid grid-cols-3 ">
        {partners?.map((partner, index) => (
          <Image src={partner.image} alt={partner.alt} width={400} height={400} key={index} className={`rounded-md`} />
        ))}
      </div>
    </div>
  );
}
