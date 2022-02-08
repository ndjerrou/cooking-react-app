import React from "react";
import Recipes from "./Recipes";
import Filters from "./Filters";

export default function Main() {
  return (
    <div style={{ height: "100%", background: "gold", marginTop: "2rem" }}>
      <Filters />
      <Recipes />
    </div>
  );
}
