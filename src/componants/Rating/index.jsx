import React from "react";
import { logementList } from "../../data/logements/logementList";

import "../../styles/css/rating/style.css";

{
  /* <i class="fa-solid fa-star"></i> */
}

function Rating(props) {
  const scaleValue = props.scaleValue;
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating__conteneur">
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <i className="fa-solid fa-star rating" key={rangeElem.toString()}></i>
        ) : (
          <i className="fa-solid fa-star" key={rangeElem.toString()}></i>
        )
      )}
    </div>
  );
}

export default Rating;
