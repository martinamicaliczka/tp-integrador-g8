import React from "react";
import "./styles.css";

class Home extends Component {
    constructor(props){
    super(props)
      this.state={
        esFav: false
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
  render(){
    return(
      <div>
        {!this.state.esFav ? <button
        type="button"
        onClick={() => this.agregarFavorito(this.props.id)}
        className="btn alert-primary fav"
        aria-label="Marcar como favorito"> +
      </button> : <button type="button"
        onClick={() => this.eliminarFavoritos(this.props.id)}
        className="btn alert-primary fav"
        aria-label="Eliminar como favorito"> ✓
      </button>}
      </div>
    )
  }
}

export default Home