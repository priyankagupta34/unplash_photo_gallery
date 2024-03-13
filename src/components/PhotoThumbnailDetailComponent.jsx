import React from "react";
import { Link } from "react-router-dom";

export default function PhotoThumbnailDetailComponent({ image }) {
  const { user /*tags, likes*/ } = image;
  return (
    <Link to={user.links.portfolio} className="photoDetailBlock">
      <img
        src={user?.profile_image?.small}
        alt={user?.name}
        className="profileImageThumb"
      />

      <span>{user.name}</span>
    </Link>
  );
}
