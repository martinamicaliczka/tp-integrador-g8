import React, { Component } from 'react'
import { api_key } from "../../utils/ApiKey";
import SRM from '../../components/SR&M/SR&M'

export default class Peliculas extends Component {
    constructor(props){
        super(props)
            this.state={
                peliculas: [],
                pedidoInicialCompleto: false,
                paginaSiguiente: "",
                busqueda:'',
                backup: []
            }   
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES`)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            this.setState({
            peliculas: data.results,
            pedidoInicialCompleto: true,
            paginaSiguiente: null,
            backup:data.results
        })}
    )
        .catch((err) => console.log(err))
    }
    irPaginaSiguiente(){
        fetch(this.state.paginaSiguiente)
        .then((res)=> res.json())
        .then((data)=> {
            
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                paginaSiguiente: null,
                backup: this.state.backup.concat(data.results),

            },
        )
        })
        .catch((err) => {
        console.log(err);
        this.setState({ pedidoInicialCompleto: true }); 
})
    }
     eliminarPersonaje(id){
        const personajesFiltrados = this.state.peliculas.filter((p) => p.id !== id);
        this.setState({
            peliculas: personajesFiltrados
        })

    }
    filtroPersonajes(texto){
        const filtrado = this.state.backup.filter((elm) => elm.name.toLowerCase().includes(texto.toLowerCase()));
        this.setState({
            peliculas: filtrado,
        })
    }
  render() {
    return (
      <React.Fragment>
            <h2>Popular movies</h2>
            {this.state.pedidoInicialCompleto ?
                <SRM peliculas={this.state.peliculas} onDelete={(id) => this.eliminarPersonaje(id)}/> : <h2>Cargando ...</h2>
            }
            <button className="btn" onClick={()=>this.irPaginaSiguiente()}>Más personajes</button>
        </React.Fragment>
    )
  }
}
