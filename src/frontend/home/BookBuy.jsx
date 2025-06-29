import React from "react";
import BookBuyNumber from "./BookBuyNumber";

export default function BookBuy() {
  return (
    <div className="bg-black text-white">
      <div className="w-full flex px-5 py-10">
        <div className="w-1/2">
          <img src="/BookBuy.png" alt="" className=" " />
        </div>

        <div className="flex flex-col justify-center  gap-4 w-1/2">
          <h1 className="text-3xl">
            Your favourite{" "}
            <span className="text-[#CA891D]">
              Reads <br />
              Are Here!
            </span>
          </h1>

          <p className="text-sm">
            Buy your favorite books online with ease! Enjoy exclusive offers and
            discounts on selected titles. Dive into our collection and find
            special deals that make reading more affordable. Shop now and unlock
            more savings with every purchase!
          </p>

          <div className="flex items-center justify-between mt-4 mb-4">
            <BookBuyNumber number="800+" name="Book Listing" />
            <BookBuyNumber number="1K+" name="Registred Members" />
            <BookBuyNumber number="50+" name="Branch Count" />
          </div>

          <button className="border border-yellow-600 py-2 px-6 rounded-md w-fit">
            Explore me
          </button>
        </div>
      </div>
    </div>
  );
}
