import React from "react";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";

interface ContainerPagesProps {
  children: React.ReactNode;
}

export default function ContainerPages({ children }: ContainerPagesProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
