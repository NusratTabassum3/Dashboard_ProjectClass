import { Link } from "react-router";

export default function NavLink({ name, path, icons }) {
  return (
    <div>
      <li className=" flex items-center gap-4">
        {icons}
        <Link to={path}>{name}</Link>{" "}
      </li>
    </div>
  );
}
