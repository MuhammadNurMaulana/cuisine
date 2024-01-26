"use client";
import React from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full flex justify-center">
      <motion.div initial={{ opacity: 0, filter: "blur(15px)", y: 50 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true, amount: 0.5 }} className="w-full md:w-[80%]">
        {children}
      </motion.div>
    </div>
  );
}
