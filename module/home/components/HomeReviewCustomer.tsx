import { review } from "@/common/constant/review";
import Container from "@/components/layouts/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function HomeReviewCustomer() {
  return (
    <Container>
      <div>
        <h1 className={`my-8 text-center ${playfair.className} text-3xl`}>What Our Customer Say</h1>
        <div className="grid lg:grid-cols-3 gap-4 p-4 md:p-0">
          {review.map((review, index) => (
            <div key={index} className="bg-stone-300 p-3 rounded-md flex-col flex gap-2">
              <h1 className="text-xl font-bold text-primary">&#8221;{review.name}&#8220;</h1>
              <p>{review.fill}</p>
              <div className="flex items-center mt-4 gap-2">
                <Image src={review.src} alt={`${review.author} image`} width={40} height={40} />
                <div>
                  <h2 className="font-bold">{review.author}</h2>
                  <p className="text-sm">{review.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
