import React from "react";
import { Outlet } from "react-router";
import Header from "../frontend/home/Header";

export default function FrontEndLayout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}
