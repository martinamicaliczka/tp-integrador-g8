import React, { Component } from 'react';
import { api_key } from '../../utils/ApiKey';
import FormularioBusqueda from '../../components/FormularioBusqueda/FormularioBusqueda';
import PeliculasPadre from '../../components/PeliculasPadre/PeliculasPadre';
import SeriesPadre from '../../components/SeriesPadre/SeriesPadre';

export default class ResultadosBusqueda extends Component {
  constructor(props){
    super(props)
      this.state = {
        resultadosBusqueda: [],
        cargando: true
      }
    }
    componentDidMount() {
      this.buscarResultados()
    }
    
    buscarResultados(){
      let tipoBusqueda = this.props.match.params.tipoBusqueda
      let busqueda = this.props.match.params.busqueda
      fetch(`https://api.themoviedb.org/3/search/multi?query=${busqueda}&api_key=${api_key}`)
        .then((res) => res.json())
        .then((data) => {
          let resultado = data.results.filter((elm) => elm.media_type == tipoBusqueda )
          this.setState({
            resultadosBusqueda: resultado,
            cargando: false
          })
        })
        .catch((err) => {console.log(err)})
    }

    componentDidUpdate(prevProps){
      if(
        prevProps.match.params.tipoBusqueda !== this.props.match.params.tipoBusqueda
        ||
        prevProps.match.params.busqueda !== this.props.match.params.busqueda
      ) {
          this.buscarResultados()
        }
    }
    render() {
      return(
        <div>
          <React.Fragment>
            <h2>Resultados de Busqueda</h2>
            {this.state.cargando ? (<img className='gif' src='/Gifs/Cargando.gif' />) :( 
              this.props.match.params.tipoBusqueda == 'movie' ?
                <PeliculasPadre peliculas={this.state.resultadosBusqueda}  hayPeliculas={true}  />
              : <SeriesPadre series={this.state.resultadosBusqueda} haySeries={true} />
               )} 
          </React.Fragment>
        </div>
      )
    }
  }
  