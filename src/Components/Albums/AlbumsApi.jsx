import React, { useState } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import PhotosApi from "./PhotosApi";
import useCustomEffect from "./useCustomEffect.jsx";
import usePagination from "./usePagination.jsx";
const AlbumsApi = () => {
  const [albums, setAlbums] = useState([]);
  const [pgIndex, setPgIndex] = useState(0);
  const albumsPerPage = 10;
  const initialAlbumIndex = pgIndex * albumsPerPage;
  const [uid, setUid] = useState(0); // uid is set to take the value of album.id
  // Next line is for custom hooks
  const link = `https://jsonplaceholder.typicode.com/albums`;
  useCustomEffect(link, setAlbums);
  const pageCount = Math.ceil(albums.length / albumsPerPage);
  return (
    <Switch>
      <Route exact path="/albums/albums-title">
        <div className="bg-light">
          <div className="container pb-2">
            <h1 className="font-weight-light text-secondary py-3">Albums</h1>
            <h4 className="title-album font-weight-light text-secondary text-left my-3 mx-3">
              Album titles
            </h4>
            <ul className="text-secondary">
              {albums
                .slice(initialAlbumIndex, initialAlbumIndex + albumsPerPage)
                .map((album) => {
                  return (
                    <li className="my-4 text-left" key={album.id}>
                      <Link
                        onClick={() => {
                          setUid(album.id);
                        }}
                        to={"/albums/albums-title/" + album.id}
                      >
                        {album.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            {/* custom hook next line */}
            {usePagination(pageCount, setPgIndex)}
          </div>
        </div>
      </Route>
      <Route path={"/albums/albums-title/" + uid}>
        <PhotosApi id={uid} />
      </Route>
      <Redirect to="/albums/albums-title" />
    </Switch>
  );
};
export default AlbumsApi;

// import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import { Link, Switch, Route } from "react-router-dom";
// import PhotosApi from "./PhotosApi";
// const AlbumsApi = () => {
//   const [albums, setAlbums] = useState([]);
//   const [pgIndex, setPgIndex] = useState(0);
//   const albumsPerPage = 10;
//   const initialAlbumIndex = pgIndex * albumsPerPage;
//   const [uid, setUid] = useState(0); // uid is set to take the value of album.id
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/albums`)
//       .then((response) => response.json())
//       .then((json) => setAlbums(json));
//   }, []);
//   return (
//     <div className="bg-light">
//       <div className="container pb-2">
//         <h1 className="font-weight-light text-secondary py-3">Albums</h1>
//         <h4 className="title-album font-weight-light text-secondary text-left my-3 mx-3">
//           Album titles
//         </h4>
//         <ul className="text-secondary">
//           {albums
//             .slice(initialAlbumIndex, initialAlbumIndex + albumsPerPage)
//             .map((album) => {
//               return (
//                 <li className="my-4 text-left" key={album.id}>
//                   <Link
//                     // onClick={() => {
//                     //   setUid(album.id);
//                     // }}
//                     to={"/albums/" + album.id}
//                   >
//                     {album.title}
//                   </Link>
//                 </li>
//               );
//             })}
//         </ul>
//         <ReactPaginate
//           previousLabel="Previous"
//           nextLabel="Next"
//           pageCount={Math.ceil(albums.length / albumsPerPage)}
//           onPageChange={(data) => {
//             let selected = data.selected;
//             setPgIndex(selected);
//           }}
//           onPageActive={() => {
//             setPgIndex(1);
//           }}
//           containerClassName="paginationClass"
//           activeClassName="paginationActive"
//           previousLinkClassName="previousBtn"
//           nextLinkClassName="nextBtn"
//           pageLinkClassName="numberBtn"
//           pageRangeDisplayed={5}
//           marginPagesDisplayed={2}
//         />
//         {/* <Switch>
//           <Route path={"/albums/" + uid}>
//             <PhotosApi id={uid} />
//           </Route>
//         </Switch> */}
//       </div>
//     </div>
//   );
// };
// export default AlbumsApi;
