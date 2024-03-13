import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import localStorage from "../utils/localStorage";
import { IoIosSearch } from "react-icons/io";


export default function SearchComponent({ image }) {
  const ref = useRef();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const ls = localStorage();
  const [searchedValues, setSearchedValues] = useState(ls.get());
  // useEffect(() => {
  //   ref.current?.focus();
  //   setSearchedValues(localStorage.get() || [])
  // }, [localStorage]);

  const inputSearch = (e) => {
    e.preventDefault();
    let searchedInputs = [
      ...searchedValues.slice(-4),
      value.trim().toLocaleLowerCase(),
    ];
    searchedInputs = [...new Set(searchedInputs)];
    setSearchedValues(searchedInputs);
    // console.log()
    ls.set(searchedInputs);
    setValue("");
    navigate(`/photos/${value}`);
  };
  console.log("image ", image);
  return (
    <div className="homeBackground">
      <title>Unplash Photo Gallery</title>
      <div className="searchArea">
        <form onSubmit={inputSearch} style={{display: 'flex'}}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={ref}
            placeholder="Search here"
          />
          <button type="submit">
            <IoIosSearch />
          </button>
        </form>
      </div>
      <div className="recents">
        {(searchedValues || []).map((sear) => (
          <div key={sear} className="chips" onClick={() => navigate(`/photos/${sear}`)}><IoIosSearch /> {sear}</div>
        ))}
      </div>
    </div>
  );
}
