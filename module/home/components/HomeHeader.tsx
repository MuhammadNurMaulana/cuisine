"use client";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function HomeHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(15px)", y: 30 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-bg-restaurant flex items-center bg-cover bg-center justify-center h-[500px] w-full md:mt-32 lg:h-[450px] "
    >
      <div className="flex flex-col gap-8    items-center p-8 rounded-3xl w-full md:w-1/2">
        <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-8xl text-center`}>Best food for your taste</h1>
        <p className={`text-center text-xl`}>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>

        <div className="flex gap-8 ">
          <Link href={"/"} className={`hover:bg-primary hover:text-white py-2 px-4 rounded-md`}>
            Book A Table
          </Link>
          <Link href={"/"} className={`hover:bg-primary hover:text-white py-2 px-4 rounded-md`}>
            Explore Menu
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
