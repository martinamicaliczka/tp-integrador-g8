import React, { Component } from 'react';
import Serie from '../../components/Serie/Serie';
import Pelicula from '../../components/Pelicula/Pelicula';
import { api_key } from '../../utils/ApiKey';

export default class Home extends Component {
  constructor(props){
      super(props)
        this.state={
          seriesPopulares: [],
          peliculasPopulares: [],
          cargarSeriesPopulares: true,
          cargarPeliculasPopulares: true
    }
  }
  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES&page=1`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        peliculasPopulares: data.results,
        cargarPeliculasPopulares: false
      })
    })
    .catch((err) => console.log(err))

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-ES&page=1`)
    .then((res) => res.json)
    .then((data) => {
      this.setState({
        seriesPopulares: data.results,
        cargarSeriesPopulares: false
      })
    })
    .catch((err) => console.log(err))
  }
    
  render() {
    return (
      <div>
        <React.Fragment>
          <h2>Popular movies</h2>
          {this.state.cargarPeliculasPopulares ? <img className='gif' src='./Gifs/Cargando.gif' /> :
          <Pelicula peliculas={(this.state.peliculasPopulares || []).splice(0,4)} />
        }
          <h2>Popular series</h2>
          {this.state.cargarSeriesPopulares ? <img className='gif' src='./Gifs/Cargando.gif' /> :
          <Serie series={(this.state.seriesPopulares || []).splice(0,4)}/>
          }
        </React.Fragment>
      </div>
    )
  }
}