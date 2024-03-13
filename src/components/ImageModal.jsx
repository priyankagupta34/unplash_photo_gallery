import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ImageModal({ openImageModal, image, moveImage }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
  }, [image])
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
                      <div className="imgClosure">
                        <div>
                          <img
                            className="modalImg"
                            src={image.urls.full}
                            alt={image.alt_description}
                            onLoad={() => setLoader(false)}
                          />
                        </div>
                        {loader && <div className="loaderContainer">
                          <img
                            src="/loader.gif"
                            alt="loader"
                            style={{
                              width: 100,
                              height: 20,
                              borderRadius: 4,
                              boxShadow: "2px 3px 5px black",
                            }}
                          />
                        </div>}
                      </div>
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
