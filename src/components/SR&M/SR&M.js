import React from "react";
import Pelicula from "../Pelicula/Pelicula";

function SRM(props) {
  return (
    <section className="top-personaje">
      {peliculas.map((p) => (
        <article key={p.id}>
          <Pelicula
            id={p.id}
            posterPath={p.poster_path}
            title={p.title}             
            description={p.overview}
            origin={p.original_language}
            extra={`Estreno: ${p.release_date}`}
            onDelete={onDelete}
          />
        </article>
      ))}
    </section>
  );
}

export default SRM;