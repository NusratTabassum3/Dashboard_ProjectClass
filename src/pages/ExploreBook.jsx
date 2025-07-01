import React from "react";
import ExploreBookCheckbox from "../components/frontend/home/ExploreBookCheckbox";
import ExploreBookCard from "../components/frontend/home/ExploreBookCard";
export default function ExploreBook() {
  return (
    <div className="font-bona">
      <div className="min-h-screen bg-white ">
        <h1 className="text-4xl text-[#CC9600] text-center mt-14 font-bold">
          Explore All Books Here
        </h1>

        <h3 className="flex justify-center items-center gap-3 mt-10 font-bold text-2xl">
          <ExploreBookCheckbox name="All" />
          <ExploreBookCheckbox name="Novel" />
          <ExploreBookCheckbox name="Translations" />
          <ExploreBookCheckbox name="Kids’ Stories" />
        </h3>

        <div className="grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 justify-items-center">
          <ExploreBookCard
            img="/book5.png"
            bookname="Thunamandhndiya"
            bookname2="Mahagamasekara"
            price="700"
            avialable="Avialable across all braches"
          />

          <ExploreBookCard
            img="/book1.png"
            bookname="Manikkawatha"
            bookname2="Mahinda Prasad Masimbul"
            price="900"
            avialable="Avialable across all braches"
          />

          <ExploreBookCard
            img="/book3.png"
            bookname="Adaraneeya Victoria"
            bookname2="Mohan Raj Madawala"
            price="700"
            avialable="Avialable across all braches"
          />

          <ExploreBookCard
            img="/book4.png"
            bookname="Thunamandhndiya"
            bookname2="Mahagamasekara"
            price="700"
            avialable="Avialable across all braches"
          />

          <ExploreBookCard
            img="/book5.png"
            bookname="Thunamandhndiya"
            bookname2="Mahagamasekara"
            price="700"
            avialable="Avialable across all braches"
          />

          <ExploreBookCard
            img="/book6.png"
            bookname="Thunamandhndiya"
            bookname2="Mahagamasekara"
            price="700"
            avialable="Avialable across all braches"
          />

          <ExploreBookCard
            img="/book1.png"
            bookname="Thunamandhndiya"
            bookname2="Mahagamasekara"
            price="700"
            avialable="Avialable across all braches"
          />

          <ExploreBookCard
            img="/book2.png"
            bookname="Thunamandhndiya"
            bookname2="Mahagamasekara"
            price="700"
            avialable="Avialable across all braches"
          />
        </div>
      </div>
    </div>
  );
}
