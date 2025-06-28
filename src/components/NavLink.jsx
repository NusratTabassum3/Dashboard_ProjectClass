import { Link } from "react-router";

export default function NavLink({ name, path, icons, color }) {
  return (
    <div>
      <li className=" flex items-center gap-4">
        {icons}
        <Link className={color} to={path}>
          {name}
        </Link>{" "}
      </li>
    </div>
  );
}
