import React from "react";
import Recipes from "./Recipes";
import Filters from "./Filters";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div style={{ height: "100%", background: "gold", marginTop: "2rem" }}>
      <Link to="/header">Go to Header</Link>
      <Filters />
      <Recipes />
    </div>
  );
}
