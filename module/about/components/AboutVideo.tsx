import { Video } from "@/components/ui/video";
import Container from "@/components/layouts/Container";
import React from "react";
import { catalogVideo } from "@/common/constant/catalogVideo";
import Image from "next/image";

export default function AboutVideo() {
  return (
    <Container>
      <Video />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 px-8">
        {catalogVideo.map((item, index) => (
          <div key={index} className="flex gap-4 items-start mx-auto">
            <Image src={item.src} alt={item.alt} width={50} height={50} />
            <div>
              <h1 className="font-bold mb-4">{item.name}</h1>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
