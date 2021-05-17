import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Switch, Route, Link } from "react-router-dom";
const PhotosApi = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);
  return (
    <div className="container">
      <h1 className="mt-5 mb-3 font-weight-light text-info">Photos Section</h1>
      <Row className="mx-2">
        {photos.map((photo) => {
          if (photo.id > 48) {
            return null;
          }
          return (
            <Col lg="4" md="6" key={photo.id}>
              <div
                className="bg-light my-3"
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
                  <Link to={"/photos/" + photo.id}>Preview Image</Link>
                </div>
              </div>
              <Switch>
                <Route path={"/photos/" + photo.id}>
                    <img src={photo.url} alt="bigphoto"/>
                </Route>
              </Switch>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default PhotosApi;
