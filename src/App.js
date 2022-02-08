import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import axios from "axios";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [store, setStore] = useState({
    recipes: {
      term: "",
      recipes: []
    }
  });

  const { recipes: myRecipes, term } = store.recipes;

  const buildNewState = (propToModify, value) => {
    return {
      ...store,
      recipes: {
        ...store.recipes,
        [propToModify]: value
      }
    };
  };

  useEffect(() => {
    async function fetchRecipes() {
      const url = `https://themealdb.com/api/json/v1/1/search.php?s=${
        store.recipes.term || "all"
      }`;

      console.log(url);

      if (term.length >= 3 || !store.recipes.term.length) {
        const {
          data: { meals: recipes }
        } = await axios(url);

        const newState = buildNewState("recipes", recipes);

        setStore(newState);
      }
    }

    fetchRecipes();
  }, [term]);

  const handleChange = (term) => {
    const newState = buildNewState("term", term);

    setStore(newState);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Header onChange={handleChange} term={term} />
      <Main recipes={myRecipes} />
    </div>
  );
}
