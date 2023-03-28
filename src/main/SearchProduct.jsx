import React, { useState } from "react";

function SearchProduct({ onSearch }) {
  const [searchName, setSearchName] = useState("");
  const handleChange = (evt) => {
    setSearchName(evt.target.value);
  };
  return (
    <div className="w-25 d-flex">
      <input
        value={searchName}
        type="text"
        placeholder="Search by name"
        className="form-control"
        onChange={handleChange}
      />
      <button
        onClick={() => onSearch(searchName)}
        className="btn btn-outline-success ms-1"
      >
        Search
      </button>
    </div>
  );
}

export default SearchProduct;
