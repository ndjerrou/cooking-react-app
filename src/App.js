import React, { useState, useEffect } from "react";
import "./App.css";
import Recipes from "./components/Recipes";
import SearchBar from "./components/SearchBar";

import axios from "axios";

function App() {
  const [state, setState] = useState({
    term: "all",
    recipes: []
  });

  const handleState = (term) => {
    console.log("handle state");
    const newState = { ...state, term };
    console.log(newState);
    setState(newState);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${state.term}`;

      const { data } = await axios(url);

      setState({ ...state, recipes: data.meals });
    };

    fetchRecipes();
  }, [state.term]);

  return (
    <div className="App">
      <SearchBar term={state.term} onChange={handleState} />
      <Recipes recipes={state.recipes} />
    </div>
  );
}

export default App;
