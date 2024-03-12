import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchComponent({ image }) {
  const ref = useRef();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  useEffect(() => {
    ref.current?.focus();
  }, [])

  const inputSearch = (e) => {
    e.preventDefault();
    navigate(`/photos/${value}`);
  }
  console.log("image ", image);
  return (
    <div className="homeBackground">
      <title>Unplash Photo Gallery</title>
      <div className="searchArea">
        <form onSubmit={inputSearch}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="inputOfSearch"
          ref={ref}
          placeholder="Search here"
        />
        <button type="submit"><FaSearch /></button>
        </form>
      </div>
    </div>
  );
}
