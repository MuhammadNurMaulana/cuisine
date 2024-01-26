"use client";
import { getData } from "@/common/service/getData/getData";
import ButtonListMenu from "@/components/elements/ButtonListMenu";
import Container from "@/components/layouts/Container";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function MenuHeader() {
  // const [mainMenu, setMainMenu] = useState([]);
  // const [menu, setMenu] = useState([]);
  // const [activeCategory, setActiveCategory] = useState("All");
  // const [dataFetched, setDataFetched] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const menuData = await getData(`http://localhost:3000/api/listMenu`);
  //       setMenu(menuData.data);
  //       setMainMenu(menuData.data);
  //       setDataFetched(true);
  //     } catch (error) {
  //       console.error("Error Fetch Data", error);
  //     }
  //   };

  //   if (!dataFetched) {
  //     fetchData();
  //   }
  // }, [dataFetched]);

  // const menuItemsSet = new Set(mainMenu.map((val: any) => val.category));
  // const menuItems = Array.from(menuItemsSet);

  // const filterItems = (cat: any) => {
  //   if (cat === "All") {
  //     setMenu(mainMenu);
  //   } else {
  //     const newItems = mainMenu.filter((newVal: any) => newVal.category === cat);
  //     setMenu(newItems);
  //   }

  //   setActiveCategory(cat);
  // };

  return (
    <Container>
      {/* <div className="mt-12 md:mt-32 w-[90%] md:w-full mx-auto flex flex-col gap-12">
        <div className="w-full md:w-[50%] mx-auto flex flex-col gap-2 items-center">
          <h1 className={`${playfair.className} text-5xl`}>Our Menu</h1>
          <p className="text-center">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <button className={`font-bold text-xls py-2 px-4 rounded-full ${activeCategory === "All" ? "bg-primary text-white" : ""}`} onClick={() => filterItems("All")}>
            All
          </button>
          {menuItems?.map(
            (item: any, index) =>
              item && (
                <button key={index} className={`font-bold text-xls py-2 px-4 rounded-full  ${activeCategory === item ? "bg-primary text-white" : ""}`} onClick={() => filterItems(item)}>
                  {item}
                </button>
              )
          )}
        </div>
      </div>
      <div className="my-20 grid md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 w-[90%] mx-auto md:w-full">
        {menu?.map(
          (menu: any) =>
            menu && (
              <div key={menu.id} className="flex flex-col items-center gap-4">
                <Image src={menu.image} alt={menu.name} width={400} height={400} className="w-full rounded-md" />
                <h1 className="text-primary font-bold">{menu.price}</h1>
                <h1 className="font-bold text-xl text-center">{menu.name}</h1>
                <p className="text-sm text-center">Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            )
        )}
      </div> */}
      <h1>Test</h1>
    </Container>
  );
}
