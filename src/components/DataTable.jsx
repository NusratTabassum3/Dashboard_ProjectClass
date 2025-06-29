import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";
import DataTableFooter from "./DataTableFooter";
import React from "react";

const booksData = [
  {
    id: 1,
    name: "tddd",
    description: "Book 1 description",
    autor: "John Doe",
    status: "Available",
    price: "10.00",
    offerPrices: "5.00",
    bgColor: "bg-white",
  },

  {
    id: 2,
    name: "Book 2",
    description: "Book 1 description",
    autor: "Tamanna Afroj",
    status: "Not Available",
    price: "10.00",
    offerPrices: "5.00",
    bgColor: "bg-gray-100",
  },

  {
    id: 3,
    name: "Book 3",
    description: "Book 1 description",
    autor: "Anika Alim",
    status: "Available",
    price: "10.00",
    offerPrices: "5.00",
    bgColor: "bg-white",
  },

  {
    id: 4,
    name: "Book 4",
    description: "Book 1 description",
    autor: "John Doe",
    status: "Available",
    price: "10.00",
    offerPrices: "5.00",
    bgColor: "bg-gray-100",
  },
  {
    id: 5,
    name: "Book 5",
    description: "Book 1 description",
    autor: "John Doe",
    status: "Available",
    price: "10.00",
    offerPrices: "5.00",
    bgColor: "bg-white",
  },
  {
    id: 6,
    name: "Book 6",
    description: "Book 1 description",
    autor: "John Doe",
    status: "Available",
    price: "10.00",
    offerPrices: "5.00",
    bgColor: "bg-gray-100",
  },
  {
    id: 7,
    name: "Book 7",
    description: "Book 1 description",
    autor: "John Doe",
    status: "Not Available",
    price: "10.00",
    offerPrices: "5.00",
    bgColor: "bg-white",
  },

  {
    id: 8,
    name: "Book 8",
    description: "Book 1 description",
    autor: "John Doe",
    status: "Not Available",
    price: "10.00",
    offerPrices: "5.00",
    bgColor: "bg-gray-100",
  },
];

export default function DataTable() {
  const [allbooks, setAllbooks] = React.useState(booksData);

  const [books, setBooks] = React.useState(booksData);
  return (
    <div className="w-full min-h-screen relative">
      <DataTableHeader setBooks={setBooks} allBooks={allbooks} />

      <DataTableBody books={books} />

      <DataTableFooter />
    </div>
  );
}
