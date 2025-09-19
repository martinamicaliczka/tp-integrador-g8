import React,{Component} from "react";
import "./styles.css"
class DetalleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFav: false
        }
    }  
    componentDidMount(){
    let storage= localStorage.getItem('favoritosPeliculas');
    let favsRecuperados = JSON.parse(storage);
    if (favsRecuperados != null) {
        favsRecuperados.includes(this.props.movie.id) ? this.setState({esFav: true }) : this.setState({ esFav: false });
        } 
    }
    agregarFavorito(id){
    let storage= localStorage.getItem('favoritosPeliculas');
    if (!storage) {
        localStorage.setItem('favoritosPeliculas', JSON.stringify([id]))
    } else {
        let favsRecuperados = JSON.parse(storage);
        favsRecuperados.push(id);
        localStorage.setItem('favoritosPeliculas', JSON.stringify(favsRecuperados));
    }
    this.setState({
    esFav: true        
    })
    }
    eliminarFavoritos(id){
        let storage= localStorage.getItem('favoritosPeliculas');
        let favsRecuperados = JSON.parse(storage);
        favsRecuperados = favsRecuperados.filter(favId => favId !== id);
        localStorage.setItem('favoritosPeliculas', JSON.stringify(favsRecuperados))
        this.setState({
        esFav: false
        })
    }
    render() {
        const {movie} = this.props
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
                        {!this.state.esFav ?<button 
                            className={`fav-btn`} 
                            onClick={() => this.agregarFavorito(movie.id)}> Agregar a favoritos
                        </button> : <button 
                            className={`fav-btn activo`} 
                            onClick={() => this.eliminarFavoritos(movie.id)}> Quitar de favoritos 
                        </button>}
                    </section>
                </section>
            </div>
        )
    }
}

export default DetalleMovie