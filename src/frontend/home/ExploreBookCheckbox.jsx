import React from "react";

export default function ExploreBookCheckbox({ name }) {
  return (
    <div>
      <input className="w-4 h-4 ml-3 " type="checkbox" id={name} />
      <label className="ml-2" htmlFor={name}>
        {name}
      </label>
    </div>
  );
}
