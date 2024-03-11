import axios from "axios";
// import getSearchData from "./getSearch";

const clientId = process.env.REACT_APP_API_KEY;

const UNSPLASH_ROOT = process.env.REACT_APP_API_URL;

// https://unsplash.com/documentation#search
export const getPhotosByQuery = async (/*{ query }*/) => {
    const query = "ocean";
    const { data } = await axios.get(
      `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=20`
    );
//   const data = new Promise((resolve) => resolve(getSearchData));
  return data;
};
