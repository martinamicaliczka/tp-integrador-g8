import React from "react";
import Pelicula from "../Pelicula/Pelicula";

function SRM(props) {
    const maximo = 160;
  return (
  <section className="row cards" id="movies">
      {props.peliculas.map((p) => (
          <Pelicula
            id={p.id}
            posterPath={p.poster_path}
            title={p.title}             
            description={ p.overview.length>maximo ? p.overview.slice(0, maximo) + '...' : p.overview}
            origin={p.original_language}
            extra={`Estreno: ${p.release_date}`}
            onDelete={props.onDelete}
          />
      ))}
    </section>
  );
}

export default SRM;