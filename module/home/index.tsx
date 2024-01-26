import ContainerPages from "@/components/layouts/ContainerPages";
import React from "react";
import HomeHeader from "./components/HomeHeader";
import HomeMenu from "./components/HomeMenu";
import HomeCatalog from "./components/HomeCatalog";
import HomeServices from "./components/HomeServices";
import HomeDeliveryCatalog from "./components/HomeDeliveryCatalog";
import HomeReviewCustomer from "./components/HomeReviewCustomer";
import HomeBlogAndArticle from "./components/HomeBlogAndArticle";

export default function HomeComponents() {
  return (
    <ContainerPages>
      <HomeHeader />
      <HomeMenu />
      <HomeCatalog />
      <HomeServices />
      <HomeDeliveryCatalog />
      <HomeReviewCustomer />
      <HomeBlogAndArticle />
    </ContainerPages>
  );
}
