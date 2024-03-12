// import { useEffect, useState } from "react";

const localStorage = () => {
//   const [localValues, setLocalValues] = useState([]);
//   useEffect(() => {
//     const valueList = JSON.parse(window.localStorage.getItem("unplash"));
//     console.log('valueList', valueList)
//     setLocalValues(valueList);
//   }, []);

  const valueList = JSON.parse(window.localStorage.getItem("unplash")) || [];

  return {
    get: () => valueList,
    set: (items) =>{
      window.localStorage.setItem(
        "unplash",
        JSON.stringify(items)
      )},
  };
};

export default localStorage;
