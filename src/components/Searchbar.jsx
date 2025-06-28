import { FaSearch } from "react-icons/fa";

export default function Searchbar({ rounded }) {
  return (
    <div
      className={`flex items-center border gap-4 px-4  ${
        rounded ? "rounded-full" : "rounded-md"
      }`}
    >
      <FaSearch size={20} />
      <input
        type="text"
        className="bg-transparent py-3 w-full outline-none"
        placeholder="Search"
      />
    </div>
  );
}
