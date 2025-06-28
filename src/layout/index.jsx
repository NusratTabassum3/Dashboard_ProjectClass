import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
const Layout = () => {
  return (
    <section>
      <div className="flex w-full min-h-screen">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <main className="w-5/6">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default Layout;
