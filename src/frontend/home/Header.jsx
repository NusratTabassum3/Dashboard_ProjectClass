import React from "react";
import { BiBell } from "react-icons/bi";

export default function Header() {
  return (
    <section className="bg-[url(public/header.png)] min-h-16 bg-black px-5">
      <div className="max-2-7xl mx-auto text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/public/logo.png" alt="" className="w-16 h-16" />
            <h3 className="text-yellow-500 font-bold uppercase">
              BooksStore <br />
              Dashboard
            </h3>
          </div>

          {/* mean */}
          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-5">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="shop">Shop</a>
              </li>
              <li>
                <a href=""></a>Contact
              </li>
            </ul>

            <BiBell size={20} />

            <div className="flex items-center">
              <img
                src="/public/avatar.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
