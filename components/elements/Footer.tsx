import { instaMenu } from "@/common/constant/instaMenu";
import { nav } from "@/common/constant/navbar";
import { lightLogo } from "@/common/service/image/image";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700", style: "italic" });

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-700 text-white py-16 mt-12">
      <div className="w-[80%] mx-auto grid md:grid-cols-2 mb-12 gap-y-8">
        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="grid gap-8">
            <div className="flex items-center gap-2">
              <Image src={lightLogo} alt="Cuisine white logo" width={30} height={30} />
              <h1 className={`${playfair.className} text-xl`}>Cuisine</h1>
            </div>
            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/MuhammadNurMaulana" target="_blank" className="bg-primary p-2 rounded-full text-white">
                <BsGithub width={15} height={15} />
              </a>
              <a href="https://www.tiktok.com/@elitescr?_t=8jPElmwnnta&_r=1" target="_blank" className="bg-primary p-2 rounded-full text-white">
                <BsTiktok width={15} height={15} />
              </a>
              <a href="https://wa.me/6283137446693" target="_blank" className="bg-primary p-2 rounded-full text-white">
                <BsWhatsapp width={15} height={15} />
              </a>
              <a href="https://www.instagram.com/ctizz4?igsh=amw2ZHA1YmtzNWtm" target="_blank" className="bg-primary p-2 rounded-full text-white">
                <BsInstagram width={15} height={15} />
              </a>
            </div>
          </div>
          <div className="grid gap-8 mx-auto">
            <h1 className="font-bold">Pages</h1>
            {nav.map((nav, index) => (
              <Link href={nav.pathUrl} key={index}>
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid gap-8">
          <a href="https://www.instagram.com/ctizz4?igsh=amw2ZHA1YmtzNWtm" target="_blank" className="text-center font-bold">
            Follow Us On Instagram
          </a>
          <div className="grid grid-cols-2 gap-2 w-[80%] mx-auto">
            {instaMenu.map((menu, index) => (
              <Image key={index} src={menu.src} alt={menu.alt} width={400} height={400} className="rounded-xl" />
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-center w-[70%] mx-auto">Copyright &copy; Muhammad Nur Maulana 2024. All Rights Reserved </h1>
    </footer>
  );
}
