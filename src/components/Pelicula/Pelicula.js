import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
class Pelicula extends Component {
  constructor(props){
    super(props)
      this.state={
        esFav: false,
        verDescripcion: false
      }
  }
  componentDidMount(){
    let storage= localStorage.getItem('favoritosPeliculas');
    let favsRecuperados = JSON.parse(storage);
    if (favsRecuperados != null) {
      favsRecuperados.includes(this.props.id) ? this.setState({esFav: true }) : this.setState({ esFav: false });
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
  toggleDescripcion(){
    this.setState({
      verDescripcion: !this.state.verDescripcion
    })
  }
  render(){
    return (
      <article
        className="single-card-movie"
        onDoubleClick={this.toggleSeleccion}
      >
      <img
        src={`https://image.tmdb.org/t/p/w500${this.props.posterPath}`} 
        alt={this.props.title}
        className="card-img-top"
      />
      <div className="cardBody">
        <h5 className="card-title">{this.props.title}</h5>
          {this.state.verDescripcion && (
          <p className="card-text">{this.props.description}</p>)}
          <button className="btn btn-primary ver-descript" onClick={() => this.toggleDescripcion()}>{this.state.verDescripcion ? 'Ocultar descripción' : 'Ver descripción'}</button>
      <div className='botones'> 
        <Link to={`/movie/${this.props.id}`} className="btn btn-primary ver-mas">Ver más</Link>
        {!this.state.esFav ? 
          <button
            type="button"
            onClick={() => this.agregarFavorito(this.props.id)}
            className="btn alert-primary fav"
            aria-label="Marcar como favorito"> +
          </button> : 
          <button 
          type="button"
          onClick={() => this.eliminarFavoritos(this.props.id)}
          className="btn alert-primary fav"
          aria-label="Eliminar como favorito"> ✓
          </button>
        }
      </div>
    </div>
  </article>
);
}}
export default Pelicula;