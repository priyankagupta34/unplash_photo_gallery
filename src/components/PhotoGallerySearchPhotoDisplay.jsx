import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
// import PhotoGridComponent from "./PhotoGridComponent";
import SearchComponent from "./SearchComponent";
import PhotoGridComponent from "./PhotoGridComponent";

export default function PhotoGallerySearchPhotoDisplay() {
  const results = useLoaderData();
  const [idx, setIdx] = useState(0);
  const params = useParams();
  console.log("params ", params);
  useEffect(() => {
    const timer = setInterval(() => {
      const val = Math.floor(Math.random() * results.length);
      setIdx(val);
    }, 50000);
    return () => clearInterval(timer);
  }, [results]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, #ffffffcc 100%, #ffffffcc 100%, #ffffffcc 100%), 
        url(${results[idx]?.urls?.regular})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <SearchComponent image={results[0]} />
      {params.searchKeyWord ? (
        <Outlet />
      ) : (
        <PhotoGridComponent results={results} />
      )}
    </div>
  );
}
