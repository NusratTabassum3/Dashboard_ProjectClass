import React from "react";
import { ShoppingCart } from "lucide-react";

function ExploreBookCard({ img, bookname, bookname2, price, avialable }) {
  return (
    <section className="p-8 mt-5 font-bona">
      <div className="w-fit border border-gray-600/25 py-3 px-2 rounded-md shadow-md ">
        <div className="flex flex-col p-3">
          <img src={img} alt="" className="w-24 h-36 ml-auto mr-auto " />

          <div className="mt-3">
            <h3 className="font-bold text-md">{bookname}</h3>
            <h3 className="text-sm font-semibold">{bookname2}</h3>
          </div>

          <div className="mt-3">
            <p className="text-sm font-semibold">Rs.{price}</p>
            <p className="font-light">{avialable}</p>
          </div>

          <button className="flex gap-3 border border-[#CC9600] justify-center rounded-lg py-1 px-4 mt-3 ml-auto mr-auto  w-fit">
            {" "}
            <ShoppingCart /> Add tp Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExploreBookCard;
