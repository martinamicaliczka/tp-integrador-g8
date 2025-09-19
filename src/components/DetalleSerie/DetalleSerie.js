import React, { Component } from 'react'
import "./styles.css"
export default class DetalleSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFav: false
        }
    }
    componentDidMount(){
    let storage= localStorage.getItem('favoritosSeries');
    let favsRecuperados = JSON.parse(storage);
    if (favsRecuperados != null) {
        favsRecuperados.includes(this.props.serie.id) ? this.setState({esFav: true }) : this.setState({ esFav: false });
        } 
    }
    agregarFavorito(id){
    let storage= localStorage.getItem('favoritosSeries');
    if (!storage) {
        localStorage.setItem('favoritosSeries', JSON.stringify([id]))
    } else {
        let favsRecuperados = JSON.parse(storage);
        favsRecuperados.push(id);
        localStorage.setItem('favoritosSeries', JSON.stringify(favsRecuperados));
    }
    this.setState({
        esFav: true
    })
    }
    eliminarFavoritos(id){
        let storage= localStorage.getItem('favoritosSeries');
        let favsRecuperados = JSON.parse(storage);
        favsRecuperados = favsRecuperados.filter(favId => favId !== id);
        localStorage.setItem('favoritosSeries', JSON.stringify(favsRecuperados))
        this.setState({
            esFav: false
        })
    }
    render() {
        const {serie} = this.props
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
                        {!this.state.esFav ?<button 
                            className={`fav-btn`} 
                            onClick={() => this.agregarFavorito(serie.id)}> Agregar a favoritos
                        </button> : <button 
                            className={`fav-btn activo`} 
                            onClick={() => this.eliminarFavoritos(serie.id)}> Quitar de favoritos 
                        </button>}
                    </section>
                </section>
            </div>
        )
    }
}