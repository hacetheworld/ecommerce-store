import React from "react";
import "./directoryItem.styles.scss";
import { withRouter } from "react-router-dom";

function DirectoryItem(props) {
  const { title, imageUrl, linkUrl } = props.item;
  // console.log(props);

  return (
    <div
      className="directory-item"
      onClick={() => props.history.push(`/${linkUrl}`)}
    >
      <div
        className="directory-item--image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <button
        className="directory-item--title"
        onClick={() => props.history.push(`/${linkUrl}`)}
      >
        {title}
      </button>
    </div>
  );
}

export default withRouter(DirectoryItem);
