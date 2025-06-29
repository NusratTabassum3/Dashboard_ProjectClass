import { Td, Th } from "../utils/tableUtils";

export default function DataTableBody({ books }) {
  return (
    <div className="w-full py-5">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Autor</Th>
            <Th>Status</Th>
            <Th>Price</Th>
            <Th>Offer Price</Th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className={book.bgColor}>
              <Td>{book.name}</Td>
              <Td>{book.description}</Td>
              <Td>{book.autor}</Td>
              <Td
                classname={
                  book.status === "Available"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {book.status}
              </Td>
              <Td>{book.price}</Td>
              <Td>{book.offerPrices}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
