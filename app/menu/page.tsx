import { METADATA } from "@/common/constant/metadata.";
import MenuComponents from "@/module/menu";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Menu ${METADATA.exTitle}`,
};

export default function MenuPage() {
  return <MenuComponents />;
}
