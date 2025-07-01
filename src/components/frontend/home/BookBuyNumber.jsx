import React from "react";

function BookBuyNumber({ number, name }) {
  return (
    <div className="font-bona">
      <div className="flex flex-col justify-center text-[#CA891D] ">
        <div className="text-2xl">{number}</div>
        <div className="text-sm">{name}</div>
      </div>
    </div>
  );
}

export default BookBuyNumber;
