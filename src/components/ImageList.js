import React from "react";

function ImageList({ list }) {
  return (
    <div>
      {list.map((li) => (
        <img src={li.urls.small} alt="name" />
      ))}
    </div>
  );
}

export default ImageList;
