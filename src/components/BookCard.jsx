import React from "react";

export const BookCard = ( { title, portada, resenia, libro }) => {
  const res = resenia.split(".", 1);
  return (
    <>
      <div className="col">
        <div className="card mb-3 c-book shadow-lg rounded">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={ "https://veracruzcultura.com/publicaciones/"+portada }  className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text c-text">{ res }</p>
                <a href={"https://veracruzcultura.com/publicaciones/"+libro}><p className="card-text"><small className="text-muted">Descargar</small></p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
