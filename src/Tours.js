import React from "react";
import Tour from "./Tour.js";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Tours List</h2>
      </div>
      <div>
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <Tour
              name={name}
              info={info}
              image={image}
              price={price}
              key={id}
              id={id}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
