import React, { Component } from 'react'
import { api_key } from "../../utils/ApiKey";
import SeriesPadre from '../../components/SeriesPadre/SeriesPadre';
export default class Series extends Component {
    constructor(props){
        super(props)
            this.state={
                series: [],
                pedidoInicialCompleto: false,
                paginaSiguiente: "",
                busqueda:'',
                backup: []
            }   
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-ES&page=1`)
        .then((res) => res.json())
        .then((data) =>{
            const nextUrl = data.page < data.total_pages ? `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-ES&page=${data.page + 1}` : null
            console.log(data)
            this.setState({
            series: data.results,
            pedidoInicialCompleto: true,
            paginaSiguiente: nextUrl,
            backup:data.results
        })}
    )
        .catch((err) => console.log(err))
    }
    irPaginaSiguiente(){
        fetch(this.state.paginaSiguiente)
        .then((res)=> res.json())
        .then((data)=> {
            const nextUrl = data.page < data.total_pages ? `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-ES&page=${data.page + 1}` : null
            this.setState({
                series: this.state.series.concat(data.results),
                paginaSiguiente: nextUrl,
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
        const personajesFiltrados = this.state.series.filter((p) => p.id !== id);
        this.setState({
            series: personajesFiltrados
        })

    }
    filtroPersonajes(texto){
        const filtrado = this.state.backup.filter((elm) => elm.name.toLowerCase().includes(texto.toLowerCase()));
        this.setState({
            series: filtrado,
        })
    }
  render() {
    return (
      <React.Fragment>
            <h2>Popular series</h2>
            {this.state.pedidoInicialCompleto ?
                <SeriesPadre series={this.state.series} onDelete={(id) => this.eliminarPersonaje(id)}/> : <h2>Cargando ...</h2>
            }
            <button className="btn" onClick={()=>this.irPaginaSiguiente()}>Más personajes</button>
        </React.Fragment>
    )
  }
}
