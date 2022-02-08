import React from "react";
import Recipe from "./Recipe";

export default function Recipes({ recipes }) {
  return (
    <section>
      {recipes.map(({ strMeal }) => (
        <Recipe title={strMeal} />
      ))}
    </section>
  );
}
