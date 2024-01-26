import React from "react";

export default function ButtonListMenu({ activeCategory, activeCategory2, filterItems, menuItems, filterItems2 }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      <button className={`font-bold text-xls py-2 px-4 rounded-full ${activeCategory}`} onClick={() => filterItems}>
        All
      </button>
      {menuItems?.map((item: any, index: any) => (
        <button key={index} className={`font-bold text-xls py-2 px-4 rounded-full  ${activeCategory2}`} onClick={() => filterItems2(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}
