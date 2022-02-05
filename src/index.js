import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipe from "./routes/Recipe";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
