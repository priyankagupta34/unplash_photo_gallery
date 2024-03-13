import React, { useState } from "react";
import PhotoThumbnailDetailComponent from "./PhotoThumbnailDetailComponent";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { downloadPhoto } from "../services/PhotoGalleryUnplashService";
import ImageModal from "./ImageModal";

export default function PhotoGridComponent({ results }) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [imgIdx, setImageIdx] = useState();
  const openImageModal = (idx) => {
    console.log("showImageModal ", idx);
    setImageIdx(idx);
    showImageModal
      ? document.getElementById("root").classList.remove("stop_scroll")
      : document.getElementById("root").classList.add("stop_scroll");
    setShowImageModal(!showImageModal);
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

  const moveImage = (type) => {
    if (
      (type === "decrease" && imgIdx === 0) ||
      (type === "increase" && imgIdx === results.length - 1)
    )
      return;
    setImageIdx(type === "decrease" ? imgIdx - 1 : imgIdx + 1);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="imageDisplayContainer">
          {results.map((image, idx) => {
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
                  onClick={() => openImageModal(idx)}
                />

                <div className="detailsContainer">
                  <PhotoThumbnailDetailComponent image={image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showImageModal && (
        <ImageModal
          openImageModal={openImageModal}
          image={results[imgIdx]}
          moveImage={moveImage}
        />
      )}
    </>
  );
}
