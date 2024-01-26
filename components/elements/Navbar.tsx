"use client";
import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { nav } from "@/common/constant/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { darkLogo } from "@/common/service/image/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600", style: "italic" });

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="flex items-center gap-4 p-8 justify-between relative md:fixed top-0 left-0 right-0 bg-white z-50">
      <motion.div initial={{ opacity: 0, filter: "blur(15px)", y: 50 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true, amount: 0.5 }} className="flex items-center gap-2">
        <Image src={darkLogo} alt="Cuisine Logo" width={40} height={40} />
        <h1 className={`${playfair.className} text-3xl lg:text-4xl`}>Cuisine</h1>
      </motion.div>

      <ul className="flex items-center justify-center gap-3 fixed bottom-12 rounded-xl md:static bg-white p-2 left-3 right-3 z-50">
        {nav.map((nav, index) => (
          <motion.li
            initial={{ opacity: 0, filter: "blur(15px)", y: 50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 1 * index }}
            viewport={{ once: true, amount: 0.8 }}
            key={index}
            className={`text-xs lg:text-xl font-medium ${
              nav.pathUrl == path ? "bg-teal-500 p-2 rounded-md md:bg-stone-300 text-white md:text-black" : ""
            } hover:bg-teal-500 p-2 transition-all duration-300 hover:text-white hover:rounded-md  hover:text-[10px] md:hover:text-sm  `}
          >
            <Link href={nav.pathUrl} className="p-1">
              {nav.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      <motion.div initial={{ opacity: 0, filter: "blur(15px)", y: 50 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true, amount: 0.5 }}>
        <Link href={"/"} className="rounded-full py-2 px-4 border-stone-700 border">
          Book A Table
        </Link>
      </motion.div>
    </nav>
  );
}
