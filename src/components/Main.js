import React from "react";
import Recipes from "./Recipes";
import Filters from "./Filters";
import { Outlet } from "react-router-dom";

export default function Main({ recipes, favourites, onFavourites }) {
  return (
    <div style={{ height: "100%", background: "gold", marginTop: "2rem" }}>
      <Filters />
      <Recipes
        recipes={recipes}
        favourites={favourites}
        onFavourites={onFavourites}
      />
      <Outlet />
    </div>
  );
}
