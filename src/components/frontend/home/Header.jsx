import React from "react";
import { BiBell } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section className="bg-[url(/header.png)] min-h-16 bg-black px-5 font-bona">
      <div className="max-2-7xl mx-auto text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="" className="w-16 h-16" />
            <h3 className="text-yellow-500 font-bold uppercase">
              BooksStore <br />
              Dashboard
            </h3>
          </div>

          {/* mean */}
          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#CC9600] font-semibold" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutbook"
                  className={({ isActive }) =>
                    isActive ? "text-[#CC9600] font-semibold" : "text-white"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "text-[#CC9600] font-semibold" : "text-white"
                  }
                >
                  Shop
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-[#CC9600] font-semibold" : "text-white"
                  }
                >
                  Contact
                </NavLink>
              </li> */}
            </ul>

            <BiBell size={20} />

            <div className="flex items-center">
              <img
                src="/avatar.png"
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
