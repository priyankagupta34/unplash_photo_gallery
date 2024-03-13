import axios from "axios";
import getSearchData from "./getSearch";

const clientId = process.env.REACT_APP_API_KEY;

const UNSPLASH_ROOT = process.env.REACT_APP_API_URL;

// https://unsplash.com/documentation#search
export const getPhotosByQuery = async ( query ) => {
  // console.log('query ', query)
  // const { data } = await axios.get(
  //   `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=40`
  // );
  const data = new Promise((resolve) => resolve(getSearchData));
  return data;
};

export const getCollectionsByQuery = async (query) => {
  const { data } = await axios.get(
    `${UNSPLASH_ROOT}/search/collections?query=${query}&client_id=${clientId}&page=1&per_page=20`
  );
  return data;
};

export const downloadPhoto = async(photoIdUrl)  => {
  const { data } = await axios.get(`${photoIdUrl}&client_id=${clientId}`);
  return data;
};


export const getAPhoto = async (photoId) => {
  const { data } = await axios.get(`${UNSPLASH_ROOT}/photos/${photoId}`);
  return data;
};

export const getPhotoStats = async (photoId) => {
  const { data } = await axios.get(`${UNSPLASH_ROOT}/photos/${photoId}/statistics`);
  return data;
};

export const getACollection = async (collectionId) => {
  const { data } = await axios.get(`${UNSPLASH_ROOT}/collections/${collectionId}`);
  return data;
};
