import React from "react";
import { ShoppingCart } from "lucide-react";

export default function BookInformation({ img, name, name2 }) {
  return (
    <section className="  mt-16 mb-10 px-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="relative  ">
          <img src={img} alt="" />
          <div className="absolute -top-1 right-12  bg-[#CC9600] p-1 rounded-md text-white z-10 ">
            <ShoppingCart />
          </div>
        </div>
        <h2 className="font-bold text-md">{name}</h2>

        <p className="">{name2}</p>
      </div>
    </section>
  );
}
