import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
// eslint-disable-next-line
import { Switch, Route, Link } from "react-router-dom";
const PhotosApi = (props) => {
  const [photos, setPhotos] = useState([]);
  const [preview, setPreview] = useState(false);
  const [uid, setUid] = useState(0);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);
  return (
    <div className="container">
      <div className="text-left text-info pt-4 pb-0 my-0 ml-3">
        <Link
          onClick={() => {
            props.setAlbumPreview((prev) => !prev);
          }}
          to="/albums"
          style={{ textDecoration: "none" }}
        >
          &lt;-Go back to Album Section
        </Link>
      </div>
      <h1 className=" mb-3 font-weight-light text-info">Photos Section</h1>
      <Row className="mx-2">
        {photos.map((photo) => {
          let albumLink = "/albums/" + props.id + "/preview/" + photo.id;
          if (props.id === photo.albumId) {
            if (photo.id > 50 * photo.albumId - 2) {
              return null;
            }
            return preview === false ? (
              <Col lg="4" md="6" sm="12" key={photo.id}>
                <div
                  className="bg-light my-4 mx-auto"
                  style={{ width: "300px", height: "200px" }}
                >
                  <div className="d-flex flex-row justify-content-around align-items-center">
                    <img
                      className="img-thumbnail thumbnails mx-3 mt-2"
                      src={photo.thumbnailUrl}
                      alt="pictures"
                    />
                    <p className="text-success mx-2 mb-0 mt-2">{photo.title}</p>
                  </div>
                  <div className="mt-5">
                    {/* <Link to={`${match.url}/preview/`}>Preview Image</Link> */}
                    <Link
                      onClick={() => {
                        setPreview((prev) => !prev);
                        setUid(photo.id);
                      }}
                      to={albumLink}
                    >
                      Preview Image
                    </Link>
                  </div>
                </div>
                {/* <Switch>
                <Route path={albumLink}>
                  <div>
                    <h3>Preview</h3>
                    <img src={photo.url} alt="bigPhoto" />
                  </div>
                </Route>
              </Switch> */}
              </Col>
            ) : (
              uid === photo.id && (
                <div
                  className="bg-light container d-flex flex-column justigy-content-center align-items-center"
                  key={photo.id}
                >
                  <h4 className="text-info font-weight-light my-3">Preview</h4>
                  <img
                    className="mt-2 bigimage"
                    src={photo.url}
                    alt="bigPhoto"
                  />
                  <button
                    onClick={() => {
                      setPreview((prev) => !prev);
                    }}
                    className="back my-4 text-info"
                  >
                    <Link
                      style={{ fontSize: "18px" }}
                      to={"/albums/" + props.id}
                    >
                      Back
                    </Link>
                  </button>
                </div>
              )
            );
          }
          return null;
        })}
      </Row>
    </div>
  );
};
export default PhotosApi;
