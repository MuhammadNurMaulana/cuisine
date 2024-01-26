import { information1 } from "@/common/service/image/image";
import Container from "@/components/layouts/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

export default function AboutInformation() {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-y-8 my-12">
        <div className="flex flex-col gap-4 w-[90%] md:w-full mx-auto">
          <h1 className={`${playfair.className} text-4xl`}>A little information for our valuable guest</h1>
          <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
          <div className="grid grid-cols-2 gap-y-12 justify-center items-center mt-12">
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className={`${playfair.className} text-2xl`}>3</h1>
              <h2 className="font-bold text-sm">Locations</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className={`${playfair.className} text-2xl`}>1995</h1>
              <h2 className="font-bold text-sm">Founded</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className={`${playfair.className} text-2xl`}>65+</h1>
              <h2 className="font-bold text-sm">Staff Members</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className={`${playfair.className} text-2xl`}>100%</h1>
              <h2 className="font-bold text-sm">Satisfied Customers</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={information1} alt="chief" width={500} height={500} className="w-full lg:w-[80%] rounded-md" />
        </div>
      </div>
    </Container>
  );
}
