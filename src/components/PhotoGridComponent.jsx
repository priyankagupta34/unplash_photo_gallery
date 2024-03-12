import React, { useState } from "react";

export default function PhotoGridComponent({ results }) {
  const [showImgDetail, setShowImgDetail] = useState("");
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
            {showImgDetail === id && (
              <div className="detailsContainer">hiii</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
