import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header({ term, onChange }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Logo />
      <SearchBar term={term} onChange={onChange} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}
