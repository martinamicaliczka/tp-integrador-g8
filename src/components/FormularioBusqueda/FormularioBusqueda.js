import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./styles.css";

class FormularioBusqueda extends Component {
    constructor(props){
        super(props)
            this.state={
                busqueda:'',
                tipoBusqueda: 'peliculas'
            }
        }
    controlarForm(e){
        e.preventDefault()
        this.props.history.push(`/results/${this.state.tipoBusqueda}/${this.state.busqueda}`)
    }
    controlarInput(e){
        this.setState({
            busqueda: e.target.value.toLowerCase()
    })
    }
     controlarTipoBusqueda(e){
        this.setState({
            tipoBusqueda: e.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={(e) => this.controlarForm(e)} className='search-form'>            
                <input className="space" type="text" onChange={(e) => this.controlarInput(e)} placeholder=" Titulo, Pelicula, Serie..." />
                 <input className= 'radio-button' type="radio" name="tipoBusqueda" value="movie" onChange={(e) => this.controlarTipoBusqueda(e)}/> Peliculas
                 <input className='radio-button' type="radio" name="tipoBusqueda" value="tv" onChange={(e) => this.controlarTipoBusqueda(e)}/> Series
                <button type="submit" className="btn-search btn-success btn-sm">Buscar</button> 
            </form>
        )
    }
}

export default withRouter(FormularioBusqueda)
