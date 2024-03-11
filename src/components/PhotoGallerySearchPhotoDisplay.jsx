import React from "react";
import { useLoaderData } from "react-router-dom";

export default function PhotoGallerySearchPhotoDisplay() {
  const { results } = useLoaderData();
  console.log("loadedGallery", results);
  return (
    <div className="imageDisplayContainer">
      {results.map(({ urls, alt_description, id, description }) => (
        <div className="imageDisplay" key={id}>
          <img className="imageDisplay" src={urls.small} alt={alt_description} />
          <p className="description">{description}</p>
        </div>
      ))}
    </div>
  );
}
