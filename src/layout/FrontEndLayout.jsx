import React from "react";
import { Outlet } from "react-router";
import Header from "../components/frontend/home/Header";
import Footer from "../components/frontend/home/Footer";

export default function FrontEndLayout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
