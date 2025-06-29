import NavLink from "./NavLink";

const userDetails = {
  name: "Sara",
  img: "/Rectangle 1.png",

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
        <NavLink path="/setting" name="Setting" icons="settings"></NavLink>
      </div>

      <div className="">
        <NavLink path="/logout" name="Logout" icons="log-out" color="red" />
      </div>
    </div>
  );
}
