import React, { Component } from 'react';
import { api_key } from "../../utils/ApiKey";
import FormularioBusqueda from '../../components/FormularioBusqueda/FormularioBusqueda';
import Pelicula from '../../components/Pelicula/Pelicula';
import Serie from '../../components/Serie/Serie';

export default class ResultadosBusqueda extends Component {
  constructor(props){
    super(props)
      this.state = {
        resultadosPeliculas: [],
        resultadosSeries: [],
        cargarResultados: true
      }
    }
    componentDidMount() {
      let textoBusqueda = this.props.match.params.busqueda
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}include_adult=false&query=${textoBusqueda}&language=en-US&page=1'`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          resultadosPeliculas: data.results,
          cargarResultados: false
        })
      })
      .catch((err) => console.log(err))

      fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}include_adult=false&query=${textoBusqueda}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          resultadosSeries: data.results
        })
      })
      .catch((err) => console.log(err))
    }
   
    render() {
      return(
        <React.Fragment>
          <h1>Resultados de Busqueda en Peliculas</h1>
          <section>
            {this.state.resultadosPeliculas && this.state.resultadosPeliculas.map(function(item){
              return(
                <Pelicula
                key={item.id}
                id={item.id}
                title={item.title}
                posterPath={item.poster_path}
                description={item.overvie}
                />
              )
            })}
          </section>

          <h1>Resultados de Busqueda en Series</h1>
          <section>
            {this.state.resultadosSeries && this.state.resultadosSeries.map(function(item){
              return(
              <Serie
              key={item.id}
              id={item.id}
              title={item.title}
              posterPath={item.poster_path}
              description={item.overvie}
              />
              )
            })}
          </section>
        </React.Fragment>
      )
      }
    }