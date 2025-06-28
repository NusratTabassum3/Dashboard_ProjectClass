import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import NavLink from "./NavLink";
import { IoIosContact } from "react-icons/io";

const Navigation = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <FaHome />,
  },

  {
    id: 2,
    name: "Books",
    path: "/books",
    icon: <IoBookSharp />,
  },

  {
    id: 3,
    name: "About",
    path: "/about",
    icon: <MdOutlineLibraryBooks />,
  },

  {
    id: 4,
    name: "Contact",
    path: "/contact",
    icon: <IoIosContact />,
  },
];

function Navbar() {
  return (
    <nav className="list-none flex flex-col gap-3">
      {Navigation.map((navItem) => (
        <NavLink
          key={navItem.id}
          name={navItem.name}
          path={navItem.path}
          icons={navItem.icon}
        />
      ))}
    </nav>
  );
}

export default Navbar;
