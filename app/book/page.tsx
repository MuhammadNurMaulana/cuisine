import { METADATA } from "@/common/constant/metadata.";
import BookComponents from "@/module/book";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Book ${METADATA.exTitle}`,
};

export default function BookPage() {
  return <BookComponents />;
}
