import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PhotoGallerySearchPhotoDisplay from "../components/PhotoGallerySearchPhotoDisplay";
import NotFound from "../components/NotFound";
import { getPhotosByQuery } from "../services/PhotoGalleryUnplashService";
import { chooseOneWord } from "../misc/config";

export default function PhotoGalleryUnplashRouting() {
  
  const router = createBrowserRouter([
    {
      element: <PhotoGallerySearchPhotoDisplay />,
      path: "/",
      errorElement: <NotFound />,
      loader: async () => {
        const res = await getPhotosByQuery(chooseOneWord());
        console.log("res ", res);
        return res;
      },
    },
  ]);

  return (
    <div>
      <h1>Photo Gallery Unplash</h1>
      <RouterProvider router={router} />
    </div>
  );
}
