export const getBooks = async() => {
    const URL = "https://veracruzcultura.com/publicaciones/api/index.php";
    const resp = await fetch(URL);
    const { data } = await resp.json();
    
    const books = data.map( dt => (
      {
        id: dt.id,
        titulo: dt.titulo,
        portada: dt.portada,
        category: dt.cat,
        resenia: dt.resenia,
        libro: dt.libro,
      }
    ));

    return books;
  }