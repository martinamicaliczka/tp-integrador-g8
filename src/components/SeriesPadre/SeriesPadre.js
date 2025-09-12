import React from "react";
import Serie from "../Serie/Serie";

function SeriesPadre(props) {
    const maximo = 160;
  return (
  <section className="row cards" id="movies">
      {props.series.map((p) => (
          <Serie
            id={p.id}
            posterPath={p.poster_path}
            name={p.name}             
            description={ p.overview.length>maximo ? p.overview.slice(0, maximo) + '...' : p.overview}
            origin={p.origin_country}
            extra={`Estreno: ${p.first_air_date}`}
            onDelete={props.onDelete}
          />
      ))}
    </section>
  );
}

export default SeriesPadre;