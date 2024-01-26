import ContainerPages from "@/components/layouts/ContainerPages";
import React from "react";
import HomeMenu from "../home/components/HomeMenu";
import HomeCatalog from "../home/components/HomeCatalog";
import AboutVideo from "./components/AboutVideo";
import HomeReviewCustomer from "../home/components/HomeReviewCustomer";
import AboutInformation from "./components/AboutInformation";

export default function AboutComponents() {
  return (
    <ContainerPages>
      <HomeCatalog />
      <AboutVideo />
      <AboutInformation />
      <HomeReviewCustomer />
    </ContainerPages>
  );
}
