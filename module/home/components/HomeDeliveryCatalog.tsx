import { galeri1, galeri2, galeri3 } from "@/common/service/image/image";
import Container from "@/components/layouts/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiReceipt } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function HomeDeliveryCatalog() {
  return (
    <Container>
      <div className="flex gap-4 my-16 w-full flex-col lg:flex-row">
        <div className="lg:w-[60%] flex gap-4">
          <Image src={galeri3} alt="Delivery Image1" width={400} height={400} className="w-[60%]" />
          <div className="w-[40%]">
            <Image src={galeri1} alt="Delivery Image1" width={400} height={400} className="mb-4" />
            <Image src={galeri2} alt="Delivery Image1" width={400} height={400} />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 justify-center lg:w-[40%]">
          <h1 className={`mt-8 lg:mt-0 ${playfair.className} text-3xl`}>Fastest Food Delivery in City</h1>
          <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
          <div className="flex gap-2 items-center mt-4">
            <div className="text-white bg-primary p-1 rounded-full">
              <AiOutlineClockCircle width={20} height={20} />
            </div>
            <h2>Delivery within 30 minutes</h2>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-white bg-primary p-1 rounded-full">
              <BiReceipt width={20} height={20} />
            </div>
            <h2>Best Offer & Prices</h2>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-white bg-primary p-1 rounded-full">
              <CgShoppingCart width={20} height={20} />
            </div>
            <h2>Online Services Available</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}
