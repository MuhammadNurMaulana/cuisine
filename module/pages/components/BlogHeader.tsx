import { getData } from "@/common/service/getData/getData";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default async function BlogHeader() {
  // const blog = await getData(`http://localhost:3000/api/articles`);
  return (
    <div>
      <div className="w-[90%] mx-auto md:mt-32">
        <h1 className={`text-center text-3xl md:text-5xl ${playfair.className}`}>Our Blog & Articles</h1>
        <p className="text-center mt-4">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 md:w-[80%] mx-auto">
        {blog?.data.map((item: any) => (
          <Link href={`/pages/${item.id}`} key={item.id} className="w-[80%] md:w-full mx-auto">
            <Image src={item.image} alt={item.title} width={400} height={400} className="rounded-md" />
            <div className="md:p-4 ">
              <p className="text-xs md:text-sm my-2">23 Desember 2023</p>
              <h1 className="text-sm md:text-lg font-bold">{item.title}</h1>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
