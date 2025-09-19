import React, { Component } from 'react';
import { api_key } from "../../utils/ApiKey";
import FormularioBusqueda from '../../components/FormularioBusqueda/FormularioBusqueda';

export default class ResultadosBusqueda extends Component {
  constructor(props){
    super(props)
      this.state = {
        resultados: []
      }
    }
    componentDidMount(){
      const texto = this.props.match.params.busqueda.toLowerCase()
      let endpoint;
      /*   
      if (tipoBusqueda === "serie") {
        endpoint = (`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-ES&page=1`)
      } else {
        endpoint = (`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES&page=1`)
      }
      */
      fetch(endpoint)
        .then(res => res.json())
        .then(data => {
          const filtrados = data.results.filter(item => {
            //* const titulo = item.title ? item.title.toLowerCase() : item.name.toLowerCase()
            return titulo.includes(texto)
          })
          this.setState({
            resultados: filtrados
          })
          
        })
        .catch((err) => console.log(err))
      }
    render(){
      return(
        <div>
          <h2>Resultados de Busqueda</h2>
          <ul>
            {this.state.resultados.map(item => (
              <li key={item.id}>
                  {item.title ? item.title : item.name}
              </li>
            ))}
          </ul>
      </div>
      )}
    }