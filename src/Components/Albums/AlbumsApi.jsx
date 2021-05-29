import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, Switch, Route } from "react-router-dom";
import PhotosApi from "./PhotosApi";
const AlbumsApi = () => {
  const [albums, setAlbums] = useState([]);
  const [pgIndex, setPgIndex] = useState(0);
  const albumsPerPage = 10;
  const initialAlbumIndex = pgIndex * albumsPerPage;
  const [uid, setUid] = useState(0); // uid is set to take the value of album.id
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, []);
  return (
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
                    to={"/albums/" + album.id}
                  >
                    {album.title}
                  </Link>
                </li>
              );
            })}
        </ul>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={Math.ceil(albums.length / albumsPerPage)}
          onPageChange={(data) => {
            let selected = data.selected;
            setPgIndex(selected);
          }}
          onPageActive={() => {
            setPgIndex(1);
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
          <Route path={"/albums/" + uid}>
            <PhotosApi id={uid} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default AlbumsApi;

// import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import { Link } from "react-router-dom";
// import PhotosApi from "./PhotosApi";
// const AlbumsApi = () => {
//   const [albums, setAlbums] = useState([]);
//   const [albumPreview, setAlbumPreview] = useState(false);
//   const [uid, setUid] = useState(0);
//   const [pageNumber, setPageNumber] = useState(0); //which page we are inside;
//   const albumsPerPage = 10; // contents per page =10;
//   const albumsVisited = pageNumber * albumsPerPage; // if 4 is the pg no. then 40 articles viewed;
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/albums`)
//       .then((response) => response.json())
//       .then((json) => setAlbums(json));
//   }, []);
//   const displayArticles = albums
//     .slice(albumsVisited, albumsVisited + albumsPerPage)
//     .map((album) => {
//       let albumLink = "/albums/" + album.id;
//       return (
//         <div key={album.id}>
//           <li className="my-4 text-left">
//             <Link
//               onClick={() => {
//                 setAlbumPreview((prev) => !prev);
//                 setUid(album.id);
//               }}
//               to={albumLink}
//             >
//               {album.title}
//             </Link>
//           </li>
//         </div>
//       );
//     });
//   return albumPreview === false ? (
//     <div className="container bg-light pb-2">
//       <h1 className="font-weight-light text-secondary py-3">Albums</h1>
//       <h4 className="title-album font-weight-light text-secondary text-left my-3 mx-3">
//         Album titles
//       </h4>
//       <ul className="text-secondary">
//         {displayArticles}
//         <ReactPaginate
//           previousLabel="Previous"
//           nextLabel="Next"
//           pageCount={Math.ceil(albums.length / albumsPerPage)}
//           onPageChange={(data) => {
//             let selected = data.selected;
//             setPageNumber(selected);
//           }}
//           onPageActive={() => {
//             setPageNumber(1);
//           }}
//           containerClassName="paginationClass"
//           activeClassName="paginationActive"
//           previousLinkClassName="previousBtn"
//           nextLinkClassName="nextBtn"
//           pageLinkClassName="numerBtn"
//           pageRangeDisplayed={5}
//           marginPagesDisplayed={2}
//         />
//       </ul>
//     </div>
//   ) : (
//     <PhotosApi id={uid} setAlbumPreview={setAlbumPreview} />
//   );
// };
// export default AlbumsApi;

// import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import { Link } from "react-router-dom";
// import PhotosApi from "./PhotosApi";
// const AlbumsApi = () => {
//   const [albums, setAlbums] = useState([]);
//   const [albumPreview, setAlbumPreview] = useState(false);
//   const [uid, setUid] = useState(0);
//   const [pageNumber, setPageNumber] = useState(0); //which page we are inside;
//   const albumsPerPage = 10; // contents per page =10;
//   const albumsVisited = pageNumber * albumsPerPage; // if 4 is the pg no. then 40 articles viewed;
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/albums`)
//       .then((response) => response.json())
//       .then((json) => setAlbums(json));
//   }, []);
//   const displayArticles = albums
//     .slice(albumsVisited, albumsVisited + albumsPerPage)
//     .map((album) => {
//       let albumLink = "/albums/" + album.id;
//       return (
//         <div key={album.id}>
//           <li className="my-4 text-left">
//             <Link
//               onClick={() => {
//                 setAlbumPreview((prev) => !prev);
//                 setUid(album.id);
//               }}
//               to={albumLink}
//             >
//               {album.title}
//             </Link>
//           </li>
//         </div>
//       );
//     });
//   return albumPreview === false ? (
//     <div className="container bg-light pb-2">
//       <h1 className="font-weight-light text-secondary py-3">Albums</h1>
//       <h4 className="title-album font-weight-light text-secondary text-left my-3 mx-3">
//         Album titles
//       </h4>
//       <ul className="text-secondary">
//         {displayArticles}
//         <ReactPaginate
//           previousLabel="Previous"
//           nextLabel="Next"
//           pageCount={Math.ceil(albums.length / albumsPerPage)}
//           onPageChange={(data) => {
//             let selected = data.selected;
//             setPageNumber(selected);
//           }}
//           onPageActive={() => {
//             setPageNumber(1);
//           }}
//           containerClassName="paginationClass"
//           activeClassName="paginationActive"
//           previousLinkClassName="previousBtn"
//           nextLinkClassName="nextBtn"
//           pageLinkClassName="numerBtn"
//           pageRangeDisplayed={5}
//           marginPagesDisplayed={2}
//         />
//       </ul>
//     </div>
//   ) : (
//     <PhotosApi id={uid} setAlbumPreview={setAlbumPreview} />
//   );
// };
// export default AlbumsApi;
