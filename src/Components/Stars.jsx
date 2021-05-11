import React from "react";
import ReactStars from "react-rating-stars-component";
const Stars = (props) => {
  const handleStarChange = (newRating) => {
    props.onRating(newRating, props.name);
  };
  return (
    <ReactStars
      count={5}
      size={30}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
      value={props.value}
      onChange={handleStarChange}
      name={props.name}
    />
  );
};
export default Stars;
