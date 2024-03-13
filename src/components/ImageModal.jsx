import React from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ImageModal({ openImageModal, image, moveImage }) {
  console.log("image", image);
  return (
    <>
      {image &&
        createPortal(
          <div id="imagePortal">
            <div className="imagePortalContainer">
              <div className="portalClass">
                <div className="">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <div className="modalTitle">{image.alt_description}</div>
                    <IoClose
                      onClick={openImageModal}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="portalClassContainer">
                    <div className="imageModal">
                      <div
                        className="modalArrow"
                        onClick={() => moveImage("decrease")}
                      >
                        <FaRegArrowAltCircleLeft />
                      </div>
                      <img
                        src={image.urls.full}
                        alt={image.alt_description}
                        style={{ height: "89vh", width: "87%" }}
                      />
                      <div
                        className="modalArrow rightArrow"
                        onClick={() => moveImage("increase")}
                      >
                        <FaRegArrowAltCircleRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
