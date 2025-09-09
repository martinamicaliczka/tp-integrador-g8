import React, { Component } from "react";
import { api_key } from "../../utils/ApiKey";
import DetalleSerie from "../../components/DetalleSerie/DetalleSerie";

export default class Serie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: null
        }
    }
    componentDidMount() {
        this.cargarSerie()
    }
    cargarSerie() {
        const id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=es-ES`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ 
                serie: data 
            });
        })
        .catch((err) => console.log("Error al traer detalle:", err));
    }
    render() {
        if (!this.state.serie) {
            return <div>Cargando Serie...</div>
        }
        return (
            <DetalleSerie serie={this.state.serie} />
        )
    }
}
