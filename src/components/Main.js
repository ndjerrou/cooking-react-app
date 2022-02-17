import React from "react";
import Recipes from "./Recipes";
import Filters from "./Filters";
import { Outlet } from "react-router-dom";

export default function Main({ filter, onFilterTerm, recipes, favourites, onFavourites }) {
  return (
    <div style={{ height: "100%", background: "gold", marginTop: "2rem" }}>
      <Filters onFilterTerm={onFilterTerm} />
      <Recipes
        recipes={recipes}
        favourites={favourites}
        onFavourites={onFavourites}
        filter={filter}
      />
      <Outlet />
    </div>
  );
}
