import React, { useState } from "react";
import PhotoThumbnailDetailComponent from "./PhotoThumbnailDetailComponent";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { downloadPhoto } from "../services/PhotoGalleryUnplashService";

export default function PhotoGridComponent({ results }) {
  const [showImgDetail, setShowImgDetail] = useState("");
  const showImageDetails = (image) => {
    if (showImgDetail === image.id) setShowImgDetail("");
    else setShowImgDetail(image.id);
    console.log("image", image);
  };
  const downloadPhotoSyn = async (photoId) => {
    const downloaded = await downloadPhoto(photoId);
    const file_path = downloaded.url;
    const aTag = document.createElement("a");
    aTag.setAttribute("target", "_blank");
    aTag.href = file_path;
    aTag.download = file_path.substr(file_path.lastIndexOf("/") + 1);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  // "#262626"
  return (
    <div className="imageDisplayContainer">
      {results.map((image) => {
        const { urls, alt_description, id, links, likes } = image;
        return (
          <div className="imageGrid" key={id}>
            <div className="iconHeart">
              <FaRegHeart /> <span>{`Likes: ${likes}`}</span>
            </div>
            <div
              className="icon"
              onClick={() => downloadPhotoSyn(links.download_location)}
            >
              <IoCloudDownloadOutline />
            </div>

            <img
              className="imageDisplay"
              src={urls.small}
              alt={alt_description}
              onClick={() => showImageDetails(image)}
              onMouseOver={() => showImageDetails(image)}
            />
            {showImgDetail === id && (
              <div
                className="detailsContainer"
                onClick={() => setShowImgDetail("")}
              >
                <PhotoThumbnailDetailComponent image={image} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
