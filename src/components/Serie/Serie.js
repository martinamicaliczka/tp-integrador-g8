import React, {Component} from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
class Serie extends Component {
  constructor(props){
    super(props)
    this.state={
      verMas: false,
      textoBoton: "Ver más",
      seleccionada: false
    }
  }
  
  render(){
    return (
  <article
    className="single-card-movie"
    onDoubleClick={this.toggleSeleccion}
  >
    <img
      src={`https://image.tmdb.org/t/p/w500${this.props.posterPath}`} 
      alt={this.props.name}
      className="card-img-top"
    />

    <div className="cardBody">
      <h5 className="card-title">{this.props.name}</h5>
      {this.props.description && (
        <p className="card-text">{this.props.description}</p>
      )}

      <Link to={`/serie/${this.props.id}`} className="btn btn-primary ver-mas">Ver más</Link>

      <button
        type="button"
        className="btn alert-primary fav"
        onClick={this.toggleSeleccion}
        aria-label="Marcar como favorito"> ♥️
      </button>
    </div>
  </article>
);
  }
}

export default Serie;