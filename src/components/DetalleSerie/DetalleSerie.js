import React, { Component } from 'react'
import "./styles.css"
export default class DetalleSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agregarAFavoritos: false
        }
    }
    toggleFavoritos() {
        this.setState({
            agregarAFavoritos: !this.state.agregarAFavoritos
        })
    }
    render() {
        const {serie} = this.props
        const {agregarAFavoritos} = this.state
        return (
            <div className="detail">
                <h2 className="detail-title">{serie.name}</h2>
                <section className="detail-row">
                    <img
                        className="detail-poster"
                        src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                        alt={serie.name}
                    />
                    <section className="info">
                        <h3>Descripción</h3>
                        <p className="description">{serie.overview}</p>
                        <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {serie.first_air_date}</p>
                        <p className="mt-0 mb-0" id="episodes"><strong>Número de capítulos:</strong> {serie.number_of_episodes}</p>
                        <p className="mt-0 seasons"><strong>Temporadas:</strong> {serie.number_of_seasons}</p>
                        <p className="mt-0"><strong>Géneros:</strong>
                            <ul className='genres-list'>
                                {serie.genres && serie.genres.map(g => 
                                    <li key={g.id}>{g.name}</li>
                                )}
                            </ul>
                        </p>
                        <button
                            className={`fav-btn ${agregarAFavoritos ? "activo" : ""}`}
                            onClick={() => this.toggleFavoritos()}>
                            {agregarAFavoritos ? "Quitar de favoritos" : "Agregar a favoritos"}
                        </button>
                    </section>
                </section>
            </div>
        )
    }
}
