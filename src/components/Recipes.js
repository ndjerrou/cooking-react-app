import React from "react";
import CardRecipe from "./CardRecipe";

export default function Recipes({ filter, recipes, favourites, onFavourites }) {
  const amIFavourite = (id) => {
    return favourites.includes(id);
  };

  const filteredRecipes = recipes.filter(recipe=>recipe.strCategory.toLowerCase() === filter.toLowerCase())

  recipes = filter === 'All' ? recipes : filteredRecipes

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
