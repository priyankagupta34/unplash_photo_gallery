import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function PhotoGallerySearchPhotoDisplay() {
  const { results } = useLoaderData();
  const [showImgDetail, setShowImgDetail] = useState("");
  console.log("loadedGallery", results);
  const showImageDetails = (image) => {
    setShowImgDetail(image.id);
    console.log("image", image);
  };
  return (
    <div className="imageDisplayContainer">
      {results.map((image) => {
        const { urls, alt_description, id } = image;
        return (
          <div className="imageGrid" key={id}>
            <img
              className="imageDisplay"
              src={urls.small}
              alt={alt_description}
              onClick={() => showImageDetails(image)}
              onMouseOver={() => showImageDetails(image)}
            />
            {showImgDetail && (
              <div className="detailsContainer">hiii</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
