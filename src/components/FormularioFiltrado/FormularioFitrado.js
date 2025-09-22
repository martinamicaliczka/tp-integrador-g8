import React, { Component } from 'react'

export default class FormularioFitrado extends Component {
    constructor(props){
        super(props)
        this.state={
            busqueda:""
        }
    }
    controlarForm(e){
        e.preventDefault()
    }
     controlarInput(e){
        this.setState({
            busqueda: e.target.value.toLowerCase()
        }, () => this.props.filtroPersonajes(this.state.busqueda))
    }
    render() {
        return (
        <div>
            <form onSubmit={(e) => this.controlarForm(e)} >
                <input type="text" onChange={(e) => this.controlarInput(e)} placeholder='Filtrar' />
            </form>
        </div>
    )
  }
}
