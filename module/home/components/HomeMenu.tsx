import { menu } from "@/common/constant/menu";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "@/components/layouts/Container";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function HomeMenu() {
  return (
    <Container>
      <h1 className={`text-center my-8 ${playfair.className} text-4xl font-bold`}>Browse Our Menu</h1>
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 `}>
        {menu.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 items-center">
            <Image src={item.src} alt={item.title} width={45} height={45} className={`${index == 0 ? "w-[30px] h-[30px] mt-1 mb-3" : ""}`} />
            <h2 className={` font-bold text-xl`}>{item.title}</h2>
            <p className="text-center">{item.paragraph}</p>
            <Link href={item.pathUrl} className={` font-bold text-primary`}>
              Explore Menu
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
