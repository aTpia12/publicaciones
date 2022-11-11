import React, { useState, useEffect } from "react";
import bann from "./img/bino1.png";
import { BookCard } from "./components/BookCard";
import { CategoryCard } from "./components/CategoryCard";
import { getBooks } from "./helpers/getBooks";

export const App = () => {

  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("0");

  const cat = ( numCat ) => {
    setCategory(numCat);
  }

  useEffect( () => {
    getBooks()
      .then( newBooks => setBooks(newBooks));
  }, []);

  return (
    <div className="container-xxl main-content">
      <img src={bann} width="50%" />
      <br />
      <button 
        type="button" 
        className="btn btn-warning btn-sm float-end"
        onClick={() => cat("0")}
      >Ver todos
      </button>
      <br />
      <br />
      <div className="card">
        <div className="card-body">
          <div className="row p-1">
            <CategoryCard title="Voladores" cat={() => cat("1")} />
            <CategoryCard title="Amoxtli" cat={() => cat("5")} />
            <CategoryCard title="Veracruz Universal" cat={() => cat("2")} />
            <CategoryCard title="Voces de la Tierra" cat={() => cat("3")} />
            <CategoryCard title="Agua Clara" cat={() => cat("4")} />
            <CategoryCard title="Pedacito de Patria" cat={() => cat("8")} />
            <CategoryCard title="Serie Especial" cat={() => cat("6")} />
            <CategoryCard title="Edición Conmemorativa" cat={() => cat("7")} />
          </div>
          <br />
          <hr />
          {/** Libros */}
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              books.map(resp => {
                if(category === "0"){
                  return  <BookCard 
                            key={resp.id} 
                            title={resp.titulo} 
                            portada={resp.portada}
                            resenia={resp.resenia}
                            libro={resp.libro} 
                          />
                }else{
                  if(resp.category === category){
                    return  <BookCard 
                              key={resp.id} 
                              title={resp.titulo} 
                              portada={resp.portada}
                              resenia={resp.resenia}
                              libro={resp.libro} 
                            />
                  }
                }
                
              })
            }
           
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
