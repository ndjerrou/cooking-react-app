import React from "react";
import CardRecipe from "./CardRecipe";

export default function Recipes({ recipes, favourites, onFavourites }) {
  const amIFavourite = (id) => {
    console.log(id);
    console.log(favourites);
    return favourites.includes(id);
  };

  return (
    <section>
      {recipes.map(({ strMeal, idMeal }) => (
        <CardRecipe
          favourites={favourites}
          title={strMeal}
          id={idMeal}
          onFavourites={onFavourites}
          isFavourite={() => amIFavourite(idMeal)}
        />
      ))}
    </section>
  );
}
