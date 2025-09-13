import React, { Component } from 'react'
import { api_key } from "../../utils/ApiKey";
import SRM from '../../components/SR&M/SR&M'
import FormularioFitrado from '../../components/FormularioFiltrado/FormularioFitrado';

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
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES&page=1`)
        .then((res) => res.json())
        .then((data) =>{
            const nextUrl = data.page < data.total_pages ? `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES&page=${data.page + 1}` : null
            console.log(data)
            this.setState({
            peliculas: data.results,
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
            const nextUrl = data.page < data.total_pages ? `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES&page=${data.page + 1}` : null            
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
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
        const personajesFiltrados = this.state.peliculas.filter((p) => p.id !== id);
        this.setState({
            peliculas: personajesFiltrados
        })
    }
    filtroPersonajes(texto){
        const filtrado = this.state.backup.filter((elm) => elm.title.toLowerCase().includes(texto.toLowerCase()));
        this.setState({
            peliculas: filtrado,
        })
    }
  render() {
    return (
      <React.Fragment>
            <h2>Popular movies</h2>
            <FormularioFitrado filtroPersonajes={(texto) => this.filtroPersonajes(texto)}/>
            {this.state.pedidoInicialCompleto ?
                <SRM peliculas={this.state.peliculas} sectionSeries={false} onDelete={(id) => this.eliminarPersonaje(id)}/> : <img  className='gif' src='./Gifs/Cargando.gif' />
            }
            {this.state.pedidoInicialCompleto ? <button className="btn masPersonajes" onClick={()=>this.irPaginaSiguiente()}>Cargar más peliculas</button> : ''}
        </React.Fragment>
    )
  }
}
