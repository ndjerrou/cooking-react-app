import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import axios from "axios";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [store, setStore] = useState({
    recipes: {
      term: "all",
      recipes: []
    }
  });

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
      const url = `https://themealdb.com/api/json/v1/1/search.php?s=${store.recipes.term}`;

      const {
        data: { meals: recipes }
      } = await axios(url);

      const newState = buildNewState("recipes", recipes);

      setStore(newState);
    }

    fetchRecipes();
  }, []);

  const handleChange = (term) => {
    const newState = buildNewState("term", term);

    setStore(newState);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/header"
          element={<Header onChange={handleChange} term={store.recipes.term} />}
        />
      </Routes>
    </div>
  );
}
