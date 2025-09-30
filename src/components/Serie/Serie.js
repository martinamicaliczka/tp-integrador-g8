import React, {Component} from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
class Serie extends Component {
  constructor(props){
    super(props)
      this.state={
        esFav: false,
        verDescripcion: false
      }
  }
  componentDidMount(){
    let storage= localStorage.getItem('favoritosSeries');
    let favsRecuperados = JSON.parse(storage);
    if (favsRecuperados != null) {
      favsRecuperados.includes(this.props.id) ? this.setState({esFav: true }) : this.setState({ esFav: false });
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
    if(this.props.eliminarFavoritoEnPadre !== undefined){
        this.props.eliminarFavoritoEnPadre(id, 'serie')
    }
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
  
      >
      <img
        src={`https://image.tmdb.org/t/p/w500${this.props.posterPath}`} 
        alt={this.props.name}
        className="card-img-top"
      />
      <div className="cardBody">
        <h5 className="card-title">{this.props.name}</h5>
          {this.state.verDescripcion && (
          <p className="card-text">{this.props.description}</p>)}
          <button className="btn btn-primary ver-descript" onClick={() => this.toggleDescripcion()}>{this.state.verDescripcion ? 'Ocultar descripción' : 'Ver descripción'}</button>
        <div className='botones'> 
          <Link to={`/serie/${this.props.id}`} className="btn btn-primary ver-mas">Ver más</Link>
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
export default Serie;