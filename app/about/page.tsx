import { METADATA } from "@/common/constant/metadata.";
import AboutComponents from "@/module/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
};
export default function About() {
  return <AboutComponents />;
}
