import { catalog } from "@/common/service/image/image";
import Container from "@/components/layouts/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function HomeCatalog() {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 py-16 md:mt-12">
        <div className={`relative `}>
          <Image src={catalog} alt="Catalog Menu" width={400} height={600} className="w-full md:w-[90%] md:h-[90%] object-covert" />
          <div className="absolute bottom-0 right-0 bg-secondary text-white p-5 rounded-xl flex flex-col gap-4 lg::w-[60%] text-xs">
            <h3 className="my-2 text-xl font-bold">Come and visit us</h3>
            <div className="flex items-center gap-2">
              <FiPhone width={20} height={20} />
              <p>+62 831 3744 6693</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail width={20} height={20} />
              <p>muhammadnrmaulana@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <SiGooglemaps width={20} height={20} />
              <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center p-8 gap-4 `}>
          <h2 className={`my-2 ${playfair.className} text-3xl`}>We provide healthy food for your family.</h2>
          <p>
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city`s rich culinary culture, we aim to honor our local roots while infusing a
            global palate.
          </p>
          <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>

          <Link href={"/"} className="rounded-full border border-black hover:border-transparent hover:bg-primary hover:text-white text-secondary py-2 px-4 text-xl font-bold">
            More About Us
          </Link>
        </div>
      </div>
    </Container>
  );
}
