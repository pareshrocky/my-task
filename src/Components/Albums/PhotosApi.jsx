
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Switch, Route, Link } from "react-router-dom";
import PreviewPhoto from "./PreviewPhoto";
import ReactPaginate from "react-paginate";
const PhotosApi = (props) => {
  const [photos, setPhotos] = useState([]);
  const [previewPhoto, setPreviewPhoto] = useState("");
  const [photoUid, setPhotoUid] = useState(0);
  const link =
    "https://jsonplaceholder.typicode.com/albums/" + props.id + "/photos";
  const [pageIndex, setPageIndex] = useState(0);
  const photosPerPage = 9;
  const initialPhotoIndex = pageIndex * photosPerPage;
  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  });
  return (
    <div className="bg-light">
      <div className="container bg-white pb-1">
        <h1 className=" mb-3 pt-3 font-weight-light text-info">
          Photos Section
        </h1>
        <Row className="mx-2 my-3">
          {photos
            .slice(initialPhotoIndex, initialPhotoIndex + photosPerPage)
            .map((photo) => {
              if (photo.id > 50 * props.id - 2) {
                return null;
              }
              return (
                <Col lg="4" md="6" key={photo.id}>
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
                      <p className="text-success mx-2 mb-0 mt-2">
                        {photo.title}
                      </p>
                    </div>
                    <div className="mt-5">
                      {/* <Link to={"/albums/" + props.id + "/preview/" + photo.id}>
                      Preview Image
                    </Link> */}
                      <Link
                        onClick={() => {
                          setPreviewPhoto(photo.url);
                          setPhotoUid(photo.id);
                        }}
                        to={"/albums/" + props.id + "/preview/" + photo.id}
                      >
                        Preview Image
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={Math.ceil(photos.length / photosPerPage)}
          onPageChange={(data) => {
            let selected = data.selected;
            setPageIndex(selected);
          }}
          onPageActive={() => {
            setPageIndex(1);
          }}
          containerClassName="paginationClass"
          activeClassName="paginationActive"
          previousLinkClassName="previousBtn"
          nextLinkClassName="nextBtn"
          pageLinkClassName="numberBtn"
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
        />
        <Switch>
          <Route path={"/albums/" + props.id + "/preview/" + photoUid}>
            <PreviewPhoto previewPhoto={previewPhoto} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default PhotosApi;

// import React, { useState, useEffect } from "react";
// import { Row, Col } from "reactstrap";
// import ReactPaginate from "react-paginate";
// import { Link } from "react-router-dom";
// const PhotosApi = (props) => {
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/photos`)
//       .then((response) => response.json())
//       .then((json) => setPhotos(json));
//   }, []);
//   const [pgNumber, setPgNumber] = useState(0);
//   const photosPerAlbum = 50;
//   const initialPhoto = (props.id - 1) * photosPerAlbum;
//   const [photos, setPhotos] = useState(
//     [].slice(initialPhoto, initialPhoto + photosPerAlbum)
//   );
//   const [preview, setPreview] = useState(false);
//   const [uid, setUid] = useState(0);
//   const photosPerPage = 6;
//   const photosDisplayed = pgNumber * photosPerPage;
//   const renderPhotos = photos
//     .slice(photosDisplayed, photosDisplayed + photosPerPage)
//     .map((photo) => {
//       let albumLink = "/albums/" + props.id + "/preview/" + photo.id;
//       if (props.id === photo.albumId) {
//         if (photo.id > 50 * photo.albumId - 2) {
//           return null;
//         }
//         return preview === false ? (
//           <Col lg="6" md="6" sm="12" key={photo.id}>
//             <div
//               className="bg-light my-4 mx-auto"
//               style={{ width: "300px", height: "200px" }}
//             >
//               <div className="d-flex flex-row justify-content-around align-items-center">
//                 <img
//                   className="img-thumbnail thumbnails mx-3 mt-2"
//                   src={photo.thumbnailUrl}
//                   alt="pictures"
//                 />
//                 <p className="text-success mx-2 mb-0 mt-2">{photo.title}</p>
//               </div>
//               <div className="mt-5">
//                 <Link
//                   onClick={() => {
//                     setPreview((prev) => !prev);
//                     setUid(photo.id);
//                   }}
//                   to={albumLink}
//                 >
//                   Preview Image
//                 </Link>
//               </div>
//             </div>
//           </Col>
//         ) : (
//           uid === photo.id && (
//             <div
//               className="bg-light container d-flex flex-column justigy-content-center align-items-center"
//               key={photo.id}
//             >
//               <h4 className="text-info font-weight-light my-3">Preview</h4>
//               <img className="mt-2 bigimage" src={photo.url} alt="bigPhoto" />
//               <button
//                 onClick={() => {
//                   setPreview((prev) => !prev);
//                 }}
//                 className="back my-4 text-info"
//               >
//                 <Link style={{ fontSize: "18px" }} to={"/albums/" + props.id}>
//                   Back
//                 </Link>
//               </button>
//             </div>
//           )
//         );
//       }
//       return null;
//     });

//   return (
//     <div className="container">
//       <div className="text-left text-info pt-4 pb-0 my-0 ml-3">
//         <Link
//           onClick={() => {
//             props.setAlbumPreview((prev) => !prev);
//           }}
//           to="/albums"
//           style={{ textDecoration: "none" }}
//         >
//           &lt;-Go back to Album Section
//         </Link>
//       </div>
//       <h1 className=" mb-3 font-weight-light text-info">Photos Section</h1>
//       <Row className="mx-2">{renderPhotos}</Row>
//       <ReactPaginate
//         previousLabel="Previous"
//         nextLabel="Next"
//         pageCount={Math.ceil(photos.length / photosPerPage)}
//         onPageChange={(data) => {
//           let selected = data.selected;
//           setPgNumber(selected);
//         }}
//         onPageActive={() => {
//           setPgNumber(1);
//         }}
//         containerClassName="paginationClass"
//         activeClassName="paginationActive"
//         previousLinkClassName="previousBtn"
//         nextLinkClassName="nextBtn"
//         pageLinkClassName="numerBtn"
//         pageRangeDisplayed={5}
//         marginPagesDisplayed={2}
//       />
//     </div>
//   );
// };
// export default PhotosApi;

// import React, { useState, useEffect } from "react";
// import { Row, Col } from "reactstrap";
// import ReactPaginate from "react-paginate";
// import { Link } from "react-router-dom";
// const PhotosApi = (props) => {
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/photos`)
//       .then((response) => response.json())
//       .then((json) => setPhotos(json));
//   }, []);
//   const [pgNumber, setPgNumber] = useState(0);
//   const photosPerAlbum = 50;
//   const initialPhoto = (props.id - 1) * photosPerAlbum;
//   const [photos, setPhotos] = useState(
//     [].slice(initialPhoto, initialPhoto + photosPerAlbum)
//   );
//   const [preview, setPreview] = useState(false);
//   const [uid, setUid] = useState(0);
//   const photosPerPage = 6;
//   const photosDisplayed = pgNumber * photosPerPage;
//   const renderPhotos = photos
//     .slice(photosDisplayed, photosDisplayed + photosPerPage)
//     .map((photo) => {
//       let albumLink = "/albums/" + props.id + "/preview/" + photo.id;
//       if (props.id === photo.albumId) {
//         if (photo.id > 50 * photo.albumId - 2) {
//           return null;
//         }
//         return preview === false ? (
//           <Col lg="6" md="6" sm="12" key={photo.id}>
//             <div
//               className="bg-light my-4 mx-auto"
//               style={{ width: "300px", height: "200px" }}
//             >
//               <div className="d-flex flex-row justify-content-around align-items-center">
//                 <img
//                   className="img-thumbnail thumbnails mx-3 mt-2"
//                   src={photo.thumbnailUrl}
//                   alt="pictures"
//                 />
//                 <p className="text-success mx-2 mb-0 mt-2">{photo.title}</p>
//               </div>
//               <div className="mt-5">
//                 <Link
//                   onClick={() => {
//                     setPreview((prev) => !prev);
//                     setUid(photo.id);
//                   }}
//                   to={albumLink}
//                 >
//                   Preview Image
//                 </Link>
//               </div>
//             </div>
//           </Col>
//         ) : (
//           uid === photo.id && (
//             <div
//               className="bg-light container d-flex flex-column justigy-content-center align-items-center"
//               key={photo.id}
//             >
//               <h4 className="text-info font-weight-light my-3">Preview</h4>
//               <img className="mt-2 bigimage" src={photo.url} alt="bigPhoto" />
//               <button
//                 onClick={() => {
//                   setPreview((prev) => !prev);
//                 }}
//                 className="back my-4 text-info"
//               >
//                 <Link style={{ fontSize: "18px" }} to={"/albums/" + props.id}>
//                   Back
//                 </Link>
//               </button>
//             </div>
//           )
//         );
//       }
//       return null;
//     });
//
//   return (
//     <div className="container">
//       <div className="text-left text-info pt-4 pb-0 my-0 ml-3">
//         <Link
//           onClick={() => {
//             props.setAlbumPreview((prev) => !prev);
//           }}
//           to="/albums"
//           style={{ textDecoration: "none" }}
//         >
//           &lt;-Go back to Album Section
//         </Link>
//       </div>
//       <h1 className=" mb-3 font-weight-light text-info">Photos Section</h1>
//       <Row className="mx-2">{renderPhotos}</Row>
//       <ReactPaginate
//         previousLabel="Previous"
//         nextLabel="Next"
//         pageCount={Math.ceil(photos.length / photosPerPage)}
//         onPageChange={(data) => {
//           let selected = data.selected;
//           setPgNumber(selected);
//         }}
//         onPageActive={() => {
//           setPgNumber(1);
//         }}
//         containerClassName="paginationClass"
//         activeClassName="paginationActive"
//         previousLinkClassName="previousBtn"
//         nextLinkClassName="nextBtn"
//         pageLinkClassName="numerBtn"
//         pageRangeDisplayed={5}
//         marginPagesDisplayed={2}
//       />
//     </div>
//   );
// };
// export default PhotosApi;
