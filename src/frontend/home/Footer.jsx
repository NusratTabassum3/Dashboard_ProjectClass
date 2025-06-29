import React from "react";

import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col gap-3 bg-black p-7">
        <img src="/public/footer.png" alt="" className="w-16 h-16" />
        <div className="flex items-center border-b border-white mb-3 "></div>
        <div className="flex justify-between items-center ">
          <p className="text-white">
            © 2024 <span className="underline "> | Neth BookPoint</span>
          </p>

          <p className="text-[#CA891D]">
            Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and
            register for our online platform to enjoy maximum benefits!
          </p>

          <div className="text-gray-600/35 flex justify-center items-center gap-3">
            {" "}
            <Facebook size={45} /> <Linkedin size={45} />
          </div>
        </div>
      </div>
    </div>
  );
}
