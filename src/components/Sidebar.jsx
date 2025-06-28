import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import SideBarUserDetails from "./SideBarUserDetails";

function Sidebar() {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <h1 className="mb-5 font-bold uppercase">BookStore Dashboard</h1>
          <Searchbar />
          <Navbar />
        </div>

        <SideBarUserDetails />
      </div>
    </div>
  );
}

export default Sidebar;
