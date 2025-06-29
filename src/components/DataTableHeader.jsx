import React from "react";
import { CiFilter } from "react-icons/ci";
import Searchbar from "../components/Searchbar";

function DataTableHeader({ setBooks, allBooks }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="bg-white shadow-md rounded-md p-4">
            <CiFilter />
          </div>
          <Searchbar setBooks={setBooks} allBooks={allBooks} />
        </div>

        <button className="bg-blue-500 text-white shadow- px-5 py-3 ">
          {" "}
          + Add Book
        </button>
      </div>
    </div>
  );
}

export default DataTableHeader;
