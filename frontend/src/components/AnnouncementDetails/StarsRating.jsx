/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import { Rating } from "react-simple-star-rating";

function Stars({ ratingValue }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(ratingValue);
  }, [ratingValue]);

  return (
    <div className="stars">
      <Rating initialValue={rating} readonly allowFraction size={24} />
    </div>
  );
}

Stars.propTypes = {
  ratingValue: PropTypes.number.isRequired,
};

export default Stars;
