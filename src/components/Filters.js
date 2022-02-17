import React from "react";

export default function Filters({onFilterTerm}) {
  return <div>
    <button onClick={(e)=>onFilterTerm(e.target.textContent)}>All</button>
    <button onClick={(e)=>onFilterTerm(e.target.textContent)}>Beef</button>
    <button onClick={(e)=>onFilterTerm(e.target.textContent)}>Pasta</button>
    <button onClick={(e)=>onFilterTerm(e.target.textContent)}>Miscellaneous</button>
  </div>;
}
