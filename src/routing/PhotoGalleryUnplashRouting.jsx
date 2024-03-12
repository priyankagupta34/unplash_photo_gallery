import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PhotoGallerySearchPhotoDisplay from "../components/PhotoGallerySearchPhotoDisplay";
import NotFound from "../components/NotFound";
import { getPhotosByQuery } from "../services/PhotoGalleryUnplashService";
import { chooseOneWord } from "../misc/config";
// import PhotoGridComponent from "../components/PhotoGridComponent";
import PhotoDisplayContainer from "../components/PhotoDisplayContainer";

export default function PhotoGalleryUnplashRouting() {
  const searchRandomWord = chooseOneWord();
  const router = createBrowserRouter([
    {
      element: <PhotoGallerySearchPhotoDisplay />,
      path: "/",
      errorElement: <NotFound />,
      loader: async () => {
        const res = await getPhotosByQuery(searchRandomWord);
        console.log("res ", res.results);
        return res.results;
      },
      children: [
        {
          element: <PhotoDisplayContainer />,
          path: "/photos/:searchKeyWord",
          errorElement: <NotFound />,
          loader: async ({ params }) => {
            const { searchKeyWord } = params;
            const res = await getPhotosByQuery(searchKeyWord);
            console.log("res ", res.results);
            return res.results;
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
