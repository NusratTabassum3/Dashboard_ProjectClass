import React from "react";
import BookInformation from "./BookInformation";

export default function BookDtails() {
  return (
    <section class="px-3 py-20 font-bona">
      <h1 className="text-4xl text-center font-semibold ">Our Best Picks</h1>

      <div className="flex   gap-1">
        <BookInformation
          img="/book1.png"
          name="Thunmanhandiya"
          name2="Mahagamasekara"
        />

        <BookInformation
          img="/book2.png"
          name="Thunmanhandiya"
          name2="Mahagamasekara"
        />

        <BookInformation
          img="/book3.png"
          name="Thunmanhandiya"
          name2="Mahagamasekara"
        />

        <BookInformation
          img="/book4.png"
          name="Thunmanhandiya"
          name2="Mahagamasekara"
        />

        <BookInformation
          img="/book1.png"
          name="Thunmanhandiya"
          name2="Mahagamasekara"
        />
      </div>
    </section>
  );
}
