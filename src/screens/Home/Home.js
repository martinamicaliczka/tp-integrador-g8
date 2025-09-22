import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { api_key } from '../../utils/ApiKey';
import PeliculasPadre from '../../components/PeliculasPadre/PeliculasPadre';
import SeriesPadre from '../../components/SeriesPadre/SeriesPadre'
import "./styles.css"

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
    .catch((err) => {console.log(err)})

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-ES&page=1`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        seriesPopulares: data.results,
        cargarSeriesPopulares: false
      })
    })
    .catch((err) => {console.log(err)})
    }
  
  render() {
    return (
      <React.Fragment>
          <h2 className="titulo">Popular Movies</h2>
          {this.state.cargarPeliculasPopulares ? (<img className='gif' src='/Gifs/Cargando.gif' />) :(
            <div>
              <PeliculasPadre peliculas={this.state.peliculasPopulares.slice(0,4)} hayPeliculas={this.state.peliculasPopulares.length > 0} /> 
              <Link to='/movies' className='home-btn-decoration'><button className="home-btn">Ver más peliculas</button></Link>
            </div> 
          )}
          <h2 className="titulo">Popular Series</h2>
          {this.state.cargarSeriesPopulares ? (<img className='gif' src='/Gifs/Cargando.gif' />) :(
            <div>
              <SeriesPadre series={this.state.seriesPopulares.slice(0,4)} haySeries={this.state.seriesPopulares.length > 0} />
              <Link to='/series' className='home-btn-decoration' ><button className='home-btn'>Ver más series</button></Link>
            </div>
          )}
      </React.Fragment>
    )
  }
}