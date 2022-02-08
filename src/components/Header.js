import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header({ term, onChange }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Logo />
      <SearchBar term={term} onChange={onChange} />
    </div>
  );
}
