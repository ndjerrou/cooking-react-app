import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const [recipe, setRecipe] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then(({ meals }) => setRecipe(meals[0].strMeal));
  });
  return (
    <>
      <article>Recette : {recipe}</article>
    </>
  );
}
