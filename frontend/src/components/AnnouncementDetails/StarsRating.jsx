/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
// https://www.npmjs.com/package/react-simple-star-rating

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

export default Stars;
