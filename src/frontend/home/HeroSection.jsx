import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[url(/hero.png)] min-h-[600px] bg-center flex flex-col justify-certer font-bona ">
      <div className="max-w-4xl mx-auto text-white text-center flex flex-col gap-5 px-10">
        <h2 className="text-4xl font-bold capitalize text-yellow-300">
          The Book Lover's Dreamland Awaits!
        </h2>
        <p className="">
          Welcome to the ultimate book lover's paradise! Join our community and
          contribute to the ever-evolving library of stories, where every book
          has a chance to inspire someone new.
        </p>

        <div className="border border-yellow-300/30 w-1/3 mx-auto py-3 px-5 rounded-md text-left relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <button className="bg-yellow-500/30 text-white py-2 px-5 rounded-md absolute right-1 top-1">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
