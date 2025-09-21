import React, { Component } from 'react';
import { api_key } from "../../utils/ApiKey";
import FormularioBusqueda from '../../components/FormularioBusqueda/FormularioBusqueda';
import PeliculasPadre from '../../components/PeliculasPadre/PeliculasPadre';
import SeriesPadre from '../../components/SeriesPadre/SeriesPadre';

export default class ResultadosBusqueda extends Component {
  constructor(props){
    super(props)
      this.state = {
        resultadosBusqueda: [],
        cargarResultados: true
      }
    }
    componentDidMount() {
      let textoBusqueda = this.props.match.params.busqueda
      let tipoBusqueda = this.props.match.params.tipo
      fetch(`https://api.themoviedb.org/3/search/${tipoBusqueda}?api_key=${api_key}&query=${textoBusqueda}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          resultadosBusqueda: data.results,
          cargarResultados: false
        })
      })
      .catch((err) => console.log(err))
    }

  
    render() {
      return(
        <div>

        </div>
      )
    }
  }