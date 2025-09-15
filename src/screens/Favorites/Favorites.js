import React, { Component } from 'react'
import PeliculasPadre from '../../components/PeliculasPadre/PeliculasPadre'
import SeriesPadre from '../../components/SeriesPadre/SeriesPadre'
import { api_key } from '../../utils/ApiKey'
import "./styles.css"
export default class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritosPeliculas: [],
            favoritosSeries: [],
            hayPeliculas: null,
            haySeries: null
        }
    }
    componentDidMount() {
        let storageP= localStorage.getItem('favoritosPeliculas');
        if(storageP!==null){
            let favsRecuperadosPelicula = JSON.parse(storageP);
            if(favsRecuperadosPelicula.length>0){
                let arrayPeliculas = [];
                favsRecuperadosPelicula.map(id => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es-ES`)
            .then((res) => res.json())
            .then((data) => {
                arrayPeliculas.push(data);
                this.setState({ 
                favoritosPeliculas: arrayPeliculas,
                hayPeliculas: true
            })
            })
            .catch((err) => console.log("Error al traer detalle:", err)))
            } else {
            this.setState({hayPeliculas: false})
            }
        } else{
            this.setState({hayPeliculas: false})
        }
        let storageS= localStorage.getItem('favoritosSeries');
        if(storageS!==null){
            let favsRecuperadosSeries = JSON.parse(storageS);
            if(favsRecuperadosSeries.length>0){
                let arraySeries = [];
                favsRecuperadosSeries.map(id => fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=es-ES`)
            .then((res) => res.json())
            .then((data) => {
                arraySeries.push(data);
                this.setState({ 
                favoritosSeries: arraySeries,
                haySeries: true
            })
            })
            .catch((err) => console.log("Error al traer detalle:", err)))
            } else {
            this.setState({haySeries: false})
            }
        } else {
            this.setState({haySeries: false})
        }
    }
    render() {
        return (
            <React.Fragment>
            <h1 className="mi-lista">Mi lista</h1>
            <h2>Películas favoritas</h2>
            <PeliculasPadre hayPeliculas={this.state.hayPeliculas} peliculas={this.state.favoritosPeliculas} />
            <h2>Series favoritas</h2>
            <SeriesPadre haySeries={this.state.haySeries} series={this.state.favoritosSeries} />
        </React.Fragment>
        )
    }
}
