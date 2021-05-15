import React, { useState, useEffect } from "react";
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);
  console.log(photos);
  return (
    <div>
      <h1 className="mt-5">Photos</h1>
      {photos.map((photo) => {
        return (
          <img
            className="mx-3 my-3"
            key={photo.id}
            src={photo.thumbnailUrl}
            alt="albums"
          />
        );
      })}
    </div>
  );
};
export default Photos;
