import React from "react";
import logoIvec from '../img/ivc.jpg'

export const CategoryCard = ( { title, cat } ) => {
  return (
    <>
      <div className="col">
        <div className="card shadow rounded hcard" onClick={() => cat(3)}>
        <img src={ logoIvec } className="card-img-top img-c" alt="..." />
          <div className="card-body">
            <p className="">{ title }</p>
          </div>
        </div>
      </div>
    </>
  );
};
