import ContainerPages from "@/components/layouts/ContainerPages";
import React from "react";
import MenuHeader from "./components/MenuHeader";
import MenuPartners from "./components/MenuPartners";

export default function MenuComponents() {
  return (
    <ContainerPages>
      <MenuHeader />
      <MenuPartners />
    </ContainerPages>
  );
}
