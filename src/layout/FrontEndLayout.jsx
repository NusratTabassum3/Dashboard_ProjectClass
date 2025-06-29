import React from "react";
import { Outlet } from "react-router";

export default function FrontEndLayout() {
  return (
    <div>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}
