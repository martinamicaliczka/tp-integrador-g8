import React,{Component} from "react";
import "./styles.css"

class DetalleMovie extends Component {
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
        const {movie} = this.props
        const {agregarAFavoritos} = this.state
        return (
            <div className="detail">
                <h2 className="detail-title">{movie.title}</h2>
                <section className="detail-row">
                    <img
                        className="poster"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <section className="info">
                        <h3>Descripción</h3>
                        <p className="description">{movie.overview}</p>
                        <p id="release-date"><strong>Fecha de estreno:</strong> {movie.release_date}</p>
                        <p><strong>Duración:</strong> {movie.runtime}</p>
                        <p id="votes"><strong>Puntuación:</strong> {movie.vote_average}</p>
                        <p><strong>Géneros:</strong></p>
                            <ul className='genres-list'> 
                                {movie.genres && movie.genres.map(g => (
                                    <li key={g.id}>{g.name}</li>
                                ))}
                            </ul>
                        <button 
                            className={`fav-btn ${this.state.agregarAFavoritos ? "activo" : ""}`} 
                            onClick={() => this.toggleFavoritos()}>
                            {agregarAFavoritos ? "Quitar de favoritos" : "Agregar a favoritos"}
                        </button>
                    </section>
                </section>
            </div>
        )
    }
}

export default DetalleMovie