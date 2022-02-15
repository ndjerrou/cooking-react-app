import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import activeHeart from "../assets/heart-active.svg";
import heart from "../assets/heart.svg";

export default function CardRecipe({ title, id, isFavourite, onFavourites }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Link to={`/recipe/${id}`}>Recette name : {title}</Link>
      <img
        src={isFavourite() ? activeHeart : heart}
        onClick={() => onFavourites(id)}
        alt="heart icon"
      />
    </div>
  );
}
