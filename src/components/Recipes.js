import React from "react";
import Recipe from "./Recipe";

export default function Recipes({ recipes }) {
  return <div>{recipes && recipes.map((recipe) => <Recipe />)}</div>;
}
