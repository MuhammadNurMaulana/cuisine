import { METADATA } from "@/common/constant/metadata.";
import HomeComponents from "@/module/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home ${METADATA.exTitle}`,
};

export default function HomePage() {
  return <HomeComponents />;
}
