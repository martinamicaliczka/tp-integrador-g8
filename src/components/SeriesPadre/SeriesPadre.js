import React from "react";
import Serie from "../Serie/Serie";

function SeriesPadre(props) {
    const maximo = 160;
  return (
  <section className="row cards" id="movies">
      {
      props.haySeries === null ?
      <img  className='gif' src='./Gifs/Cargando.gif' /> :
      props.haySeries ?
      props.series.map((p, idx) => (
          <Serie
            key={idx + p.id}
            id={p.id}
            posterPath={p.poster_path}
            name={p.name}             
            description={ p.overview.length>maximo ? p.overview.slice(0, maximo) + '...' : p.overview}
            origin={p.origin_country}
            extra={`Estreno: ${p.first_air_date}`}
            onDelete={props.onDelete}
            eliminarFavoritoEnPadre={props.eliminarFavoritoEnPadre}
          />
      ))
      :
      <p>No hay series favoritas</p>
    }
    </section>
  );
}

export default SeriesPadre;