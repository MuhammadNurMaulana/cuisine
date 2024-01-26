import { getData } from "@/common/service/getData/getData";
import { menuFetch } from "@/common/types/type";
import Container from "@/components/layouts/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default async function HomeBlogAndArticle() {
  const menu = await getData(`${process.env.WEB_URL}/api/menu`);
  const menuHeader = await getData(`${process.env.WEB_URL}/api/menuHeader`);
  return (
    <Container>
      <div className="w-[90%] md:w-full mx-auto">
        <h1 className={`mt-16 mb-12 ${playfair.className} text-4xl`}>Our Blog & Articles</h1>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            {menuHeader.data?.map((menu: menuFetch) => (
              <div key={menu.id} className="w-full">
                <Image src={menu.image} alt={menu.title} width={600} height={600} className="rounded-md w-full" />
                <div className="p-4 grid gap-3">
                  <p className="text-sm">{menu.date}</p>
                  <h2 className="text-xl font-bold">{menu.title}</h2>
                  <p>{menu.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {menu.data?.map((menu: menuFetch, index: any) =>
              index < 5 ? (
                <div key={menu.id}>
                  <Image src={menu.image} alt={menu.title} width={400} height={400} className="rounded-md" />
                  <div className="grid gap-4 p-4">
                    <p className="text-sm">{menu.date}</p>
                    <h2 className="font-bold">{menu.title}</h2>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
