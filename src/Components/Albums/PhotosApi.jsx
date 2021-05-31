import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Switch, Route, Link, useParams, Redirect } from "react-router-dom";
import PreviewPhoto from "./PreviewPhoto";
import useCustomEffect from "./useCustomEffect";
import usePagination from "./usePagination.jsx";
const PhotosApi = (props) => {
  const [photos, setPhotos] = useState([]);
  const [previewPhoto, setPreviewPhoto] = useState("");
  const [photoUid, setPhotoUid] = useState(0);
  // const { albumId } = useParams();
  // console.log(albumId);
  const [pageIndex, setPageIndex] = useState(0);
  const photosPerPage = 6;
  const initialPhotoIndex = pageIndex * photosPerPage;
  const link =
    "https://jsonplaceholder.typicode.com/albums/" + props.id + "/photos";
  // next line is custom Hooks
  useCustomEffect(link, setPhotos);
  const pageCount = Math.ceil(photos.length / photosPerPage);
  return (
    <Switch>
      <Route exact path={"/albums/" + props.id}>
        <div className="bg-light">
          <div className="container bg-white pb-1">
            <h1 className=" mb-3 pt-3 font-weight-light text-info">
              Photos Section
            </h1>
            <Row className="mx-2 my-3">
              {photos
                .slice(initialPhotoIndex, initialPhotoIndex + photosPerPage)
                .map((photo) => {
                  return (
                    <Col lg="6" md="6" key={photo.id}>
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
            {/* custom hooks */}
            {usePagination(pageCount, setPageIndex)}
          </div>
        </div>
      </Route>
      <Route path={"/albums/" + props.id + "/preview/" + photoUid}>
        <PreviewPhoto previewPhoto={previewPhoto} id={props.id} />
      </Route>
      <Redirect to={"/albums/" + props.id} />
    </Switch>
  );
};
export default PhotosApi;

// import React, { useState, useEffect } from "react";
// import { Row, Col } from "reactstrap";
// import { Switch, Route, Link, useParams } from "react-router-dom";
// import PreviewPhoto from "./PreviewPhoto";
// import ReactPaginate from "react-paginate";
//
// const PhotosApi = (props) => {
// const [photos, setPhotos] = useState([]);
// const [previewPhoto, setPreviewPhoto] = useState("");
// const [photoUid, setPhotoUid] = useState(0);
// const { albumId } = useParams()
//
// const link = "https://jsonplaceholder.typicode.com/albums/" + albumId + "/photos";
// const [pageIndex, setPageIndex] = useState(0);
// const photosPerPage = 9;
// const initialPhotoIndex = pageIndex * photosPerPage;
//
// useEffect(() => {
//   fetch(link)
//     .then((response) => response.json())
//     .then((json) => setPhotos(json));
// }, []);
//
// return (
//   <div className="bg-light">
//     <div className="container bg-white pb-1">
//       <h1 className=" mb-3 pt-3 font-weight-light text-info">
//         Photos Section
//       </h1>
//       <Row className="mx-2 my-3">
//         {photos
//           .slice(initialPhotoIndex, initialPhotoIndex + photosPerPage)
//           .map((photo) => {
//             // if (photo.id > 50 * props.id - 2) {
//             //   return null;
//             // }
//             return (
//               <Col lg="4" md="6" key={photo.id}>
//                 <div
//                   className="bg-light my-4 mx-auto"
//                   style={{ width: "300px", height: "200px" }}
//                 >
//                   <div className="d-flex flex-row justify-content-around align-items-center">
//                     <img
//                       className="img-thumbnail thumbnails mx-3 mt-2"
//                       src={photo.thumbnailUrl}
//                       alt="pictures"
//                     />
//                     <p className="text-success mx-2 mb-0 mt-2">
//                       {photo.title}
//                     </p>
//                   </div>
//                   <div className="mt-5">
//                     {/* <Link to={"/albums/" + props.id + "/preview/" + photo.id}>
//                     Preview Image
//                   </Link> */}
//                     <Link
//                       // onClick={() => {
//                       //   setPreviewPhoto(photo.url);
//                       //   setPhotoUid(photo.id);
//                       // }}
//                       to={"/albums/" + albumId + "/preview/" + photo.id}
//                     >
//                       Preview Image
//                     </Link>
//                   </div>
//                 </div>
//               </Col>
//             );
//           })}
//       </Row>
//       <ReactPaginate
//         previousLabel="Previous"
//         nextLabel="Next"
//         pageCount={Math.ceil(photos.length / photosPerPage)}
//         onPageChange={(data) => {
//           let selected = data.selected;
//           setPageIndex(selected);
//         }}
//         onPageActive={() => {
//           setPageIndex(1);
//         }}
//         containerClassName="paginationClass"
//         activeClassName="paginationActive"
//         previousLinkClassName="previousBtn"
//         nextLinkClassName="nextBtn"
//         pageLinkClassName="numberBtn"
//         pageRangeDisplayed={5}
//         marginPagesDisplayed={2}
//       />
//       {/* <Switch>
//         <Route path={"/albums/" + props.id + "/preview/" + photoUid}>
//           <PreviewPhoto previewPhoto={previewPhoto} />
//         </Route>
//       </Switch> */}
//     </div>
//   </div>
// );
// };
// export default PhotosApi;
