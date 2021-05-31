
// import React from "react";
// const PreviewPhoto = (props) => {
//   return (
//     <div className="container d-flex flex-column justify-content-center align-items-center">
//       <h2 className="text-info font-weight-light my-3">Preview</h2>
//       <img className="mt-2 bigimage" src={props.previewPhoto} alt="bigPhoto" />
//     </div>
//   );
// };
// export default PreviewPhoto;










import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom"
const PreviewPhoto = (props) => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-info font-weight-light my-3">Preview</h2>
      <img className="mt-2 bigimage" src={props.previewPhoto} alt="bigPhoto" />
      <Button className="back my-3 text-info bg-white">
      <Link style={{ fontSize: "18px" }} to={"/albums/" + props.id}>
                   Back
                </Link>
      </Button>
    </div>
  );
};
export default PreviewPhoto;
