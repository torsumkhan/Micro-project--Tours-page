import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)} className="readmore">
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>

        <div className="btn-container">
          <button className="tour-btn" onClick={() => removeTour(id)}>
            Remove
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
