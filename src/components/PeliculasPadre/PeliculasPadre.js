import React from "react";
import Pelicula from "../Pelicula/Pelicula";

function PeliculasPadre(props) {
    const maximo = 160;
  return (
  <section className="row cards" id="movies">
      {
      props.hayPeliculas === null ?
      <img  className='gif' src='./Gifs/Cargando.gif' /> :
      props.hayPeliculas ?
      props.peliculas.map((p) => (
          <Pelicula
            key={p.id}
            id={p.id}
            posterPath={p.poster_path}
            title={p.title}             
            description={ p.overview.length>maximo ? p.overview.slice(0, maximo) + '...' : p.overview}
            origin={p.original_language}
            extra={`Estreno: ${p.release_date}`}
            onDelete={props.onDelete}
            eliminarFavoritoEnPadre={props.eliminarFavoritoEnPadre}
          />
      ))
      :
      <p>No hay peliculas favoritas</p>
    }
    </section>
  );
}

export default PeliculasPadre;