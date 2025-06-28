import React from "react";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <section>
      <div className="flex w-full">
        <div className="w-1/6">sidebar</div>
        <main className="w-5/6">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default Layout;
