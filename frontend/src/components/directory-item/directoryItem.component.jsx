import React from "react";
import "./directoryItem.styles.scss";
export default function DirectoryItem({
  item: { title, imageUrl, size, id, linkUrl },
}) {
  return (
    <div className="directory-item">
      <div
        className="directory-item--image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <button className="directory-item--title">{title}</button>
    </div>
  );
}
