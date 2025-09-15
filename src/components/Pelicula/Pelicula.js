import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
class Pelicula extends Component {
  constructor(props){
    super(props)
    this.state={
      verMas: false
    }
  }
  render(){
    let favsToString = JSON.stringify(this.props);
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
        {this.props.description && (
          <p className="card-text">{this.props.description}</p>
        )}

      <Link to={`/movie/${this.props.id}`} className="btn btn-primary ver-mas">Ver más</Link>

      <button
        type="button"
        className="btn alert-primary fav"
        onClick={this.toggleSeleccion}
        aria-label="Marcar como favorito"> +
      </button>
    </div>
  </article>
);
  }
}

export default Pelicula;