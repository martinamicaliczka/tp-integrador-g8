import React, { Component } from "react";
import { api_key } from "../../utils/ApiKey";
import DetalleMovie from "../../components/DetalleMovie/DetalleMovie";
export default class Movie extends Component {
    constructor(props) {
            super(props);
            this.state = {
                movie: null
            }
        }
    componentDidMount() {
        this.cargarMovie()
    }
    cargarMovie() {
        const id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=es-ES`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.id) {
                this.props.history.push("/error404");
            } else {
                this.setState({
                    movie: data
                });
            } 
        })
        .catch((err) => console.log("Error al traer detalle:", err));
        }
    render() {
        if (!this.state.movie) {
            return <img  className='gif' src='./Gifs/Cargando.gif' />
        }
        return (
            <DetalleMovie movie={this.state.movie} />
        )
    }
}