import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [localValues, setLocalValues] = useState([]);
  useEffect(() => {
    const valueList = JSON.parse(window.localStorage.getItem("unplash"));
    console.log('valueList', valueList)
    setLocalValues(valueList);
  }, []);

  return {
    get: () => localValues,
    set: (items) =>{
      window.localStorage.setItem(
        "unplash",
        JSON.stringify(items)
      )},
  };
};

export default useLocalStorage;
