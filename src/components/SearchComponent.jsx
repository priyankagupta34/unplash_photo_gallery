import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function SearchComponent({ image }) {
  const ref = useRef();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const localStorage = useLocalStorage();
  const [searchedValues, setSearchedValues] = useState([]);
  useEffect(() => {
    ref.current?.focus();
    setSearchedValues(localStorage.get())
  }, [localStorage]);

  const inputSearch = (e) => {
    e.preventDefault();
    let searchedInputs = [
      ...searchedValues.slice(-4),
      value.trim().toLocaleLowerCase(),
    ];
    searchedInputs = [...new Set(searchedInputs)];
    setSearchedValues(searchedInputs);
    // console.log()
    localStorage.set(searchedInputs);
    setValue("");
    navigate(`/photos/${value}`);
  };
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
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="recents">
        {(searchedValues || []).map((sear) => (
          <div className="chips">{sear}</div>
        ))}
      </div>
    </div>
  );
}
