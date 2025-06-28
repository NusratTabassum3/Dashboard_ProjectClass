import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export default function DataTableFooter() {
  return (
    <div className="absolute left-0 bottom-0 w-full bg-gray-100/80 py-10 px-5 z-10">
      <div className="flex justify-between">
        <p>1-10 of 97</p>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <p>Rows Per page:</p>
            <select name="" id="">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-white rounded-md p-2">
              <ArrowLeft size={15} />
            </button>
            <button className="bg-white rounded-md p-2">
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
