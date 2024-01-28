import { METADATA } from "@/common/constant/metadata.";
import ContactComponents from "@/module/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
};

export default function ContactPage() {
  return <ContactComponents />;
}
