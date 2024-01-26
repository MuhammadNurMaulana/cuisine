import { eventsService } from "@/common/constant/event";
import Container from "@/components/layouts/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function HomeServices() {
  return (
    <Container>
      <div className="w-[90%] md:w-full mx-auto flex flex-col gap-8">
        <h1 className={`${playfair.className} text-4xl w-full md:w-1/2`}>We also offer unique services for your events</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {eventsService.map((events, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="relative group rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 flex justify-center items-center text-white scale-0 group-hover:scale-100 cursor-pointer transition-all duration-300">
                  <h2 className={`${playfair.className} text-xl`}>Cuisine</h2>
                </div>
                <Image src={events.src} alt={events.name} width={400} height={400} />
              </div>
              <h2 className="font-bold text-xl">{events.name}</h2>
              <p>{events.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
