import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  return (
    <div className="flex items-center border gap-4 px-4 mb-5">
      <FaSearch size={20} />
      <input
        type="text"
        className="bg-gray-100 py-3 w-full outline-none"
        placeholder="Search"
      />
    </div>
  );
}
