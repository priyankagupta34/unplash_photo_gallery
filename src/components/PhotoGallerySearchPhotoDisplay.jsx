import React from "react";
import { useLoaderData } from "react-router-dom";
import PhotoGridComponent from "./PhotoGridComponent";

export default function PhotoGallerySearchPhotoDisplay() {
  const { results } = useLoaderData();

  return <PhotoGridComponent results={results} />;
}
