import React from "react";
import { useLoaderData } from "react-router-dom";
import PhotoGridComponent from "./PhotoGridComponent";
import SearchPhotoComponent from "./SearchPhotoComponent";

export default function PhotoGallerySearchPhotoDisplay() {
  const { results } = useLoaderData();

  return (
    <div>
      <SearchPhotoComponent />
      <PhotoGridComponent results={results} />;
    </div>
  );
}
