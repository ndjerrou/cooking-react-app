import React, { useState } from "react";

export default function SearchBar({ term, onChange }) {
  return (
    <div>
      <input value={term} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
