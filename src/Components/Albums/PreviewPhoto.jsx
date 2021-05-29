import React from "react";
const PreviewPhoto = (props) => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-info font-weight-light my-3">Preview</h2>
      <img className="mt-2 bigimage" src={props.previewPhoto} alt="bigPhoto" />
    </div>
  );
};
export default PreviewPhoto;
