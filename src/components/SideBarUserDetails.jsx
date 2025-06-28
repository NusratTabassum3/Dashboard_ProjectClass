import NavLink from "./NavLink";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
const userDetails = {
  name: "Sara",
  img: "/public/Rectangle 1.png",
  email: "sara@gmail.com",
  role: "admin",
};

export default function SideBarUserDetails() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <img src={userDetails.img} alt="" className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-bold capitalize">{userDetails.name}</h3>
          <p className="bg-yellow-500 rounded-md px-3">{userDetails.role}</p>
        </div>
      </div>

      <div>
        <NavLink
          path="/setting"
          name="Setthing"
          icons={<IoMdSettings />}
        ></NavLink>
      </div>

      <div className="">
        <NavLink
          path="/logout"
          name="Logout"
          icons={<MdLogout className="text-red-600" />}
          color="text-red-600"
        ></NavLink>
      </div>
    </div>
  );
}
