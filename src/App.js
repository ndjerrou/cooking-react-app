import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Recipe from "./components/Recipe";

export default function App() {
  const [store, setStore] = useState({
    recipes: {
      term: "",
      recipes: []
    }
  });
  


  const [favourites, setFavourites] = useState([]);

  const [filter, setFilter] = useState('All')


  const onFilterTerm = (filter)=>{
    setFilter(filter)  
  }

  const handleFavourites = (id) => {
    // handle the heart's state management

    // si l'id est déjà favori ?
    if (isFavourite(id)) {
      removeFavourite(id);
    }
    // si l'id n'est pas favori
    else {
      addFavourite(id);
    }
  };


  const isFavourite = (id) => {
    return favourites.some((el) => el === id);
  };

  const addFavourite = (id) => {
    setFavourites((prevState) => [...prevState, id]);
  };

  const removeFavourite = (id) => {
    setFavourites((prevState) => {
      return prevState.filter((el) => el !== id);
    });
  };

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
      <Header term={term} onChange={handleChange} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              recipes={myRecipes}
              favourites={favourites}
              onFavourites={handleFavourites}
              onFilterTerm={onFilterTerm}
              filter={filter}
            />
          }
        >
          <Route path="recipe/:id" element={<Recipe />} />
        </Route>
      </Routes>
    </div>
  );
}
