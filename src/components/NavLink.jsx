import { Link } from "react-router-dom";
import { DynamicIcon } from "lucide-react/dynamic";

export default function NavLink({ name, path, icons, color }) {
  const textColorClass = color === "red" ? "text-red-500" : "text-gray-800";

  return (
    <li className="flex items-center gap-4">
      <DynamicIcon name={icons} color={color} size={20} />
      <Link to={path} className={textColorClass}>
        {name}
      </Link>
    </li>
  );
}
