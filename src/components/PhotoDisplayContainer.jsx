import React from "react";
import PhotoGridComponent from "./PhotoGridComponent";
import { useLoaderData } from "react-router-dom";

export default function PhotoDisplayContainer() {
  const results = useLoaderData();
  return <PhotoGridComponent results={results} />;
}
