import React, { useState, useEffect } from "react";
 // eslint-disable-next-line
import { Link, Switch, Route } from "react-router-dom";
import PhotosApi from "./PhotosApi.jsx";
const AlbumsApi = () => {
  const [albums, setAlbums] = useState([]);
  const [albumPreview, setAlbumPreview] = useState(false);
  const [uid, setUid] = useState(0);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, []);
  return albumPreview === false ? (
    <div className="container bg-light">
      <h1 className="font-weight-light text-secondary py-3">Albums</h1>
      <h4 className="title-album font-weight-light text-secondary text-left my-3 mx-3">
        Album titles
      </h4>
      <ul className="text-secondary">
        {albums.map((album) => {
          let albumLink = "/albums/" + album.id;
          return (
            <div key={album.id}>
              <li className="my-4 text-left">
                <Link
                  onClick={() => {
                    setAlbumPreview((prev) => !prev);
                    setUid(album.id);
                  }}
                  to={albumLink}
                >
                  {album.title}
                </Link>
              </li>
              {/* <Switch>
                <Route path={albumLink}>
                  <PhotosApi id={album.id} />
                </Route>
              </Switch> */}
            </div>
          );
        })}
      </ul>
    </div>
  ) : (
    <PhotosApi id={uid} setAlbumPreview={setAlbumPreview} />
  );
};
export default AlbumsApi;
