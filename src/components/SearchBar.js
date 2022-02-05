import React from "react";

export default function SearchBar({ term, onChange }) {
  return (
    <div>
      {/* controlled component/element */}
      <input value={term} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
