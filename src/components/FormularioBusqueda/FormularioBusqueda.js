import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
class FormularioBusqueda extends Component {
    constructor(props){
        super(props)
            this.state={
                busqueda:''
            }
        }
    controlarForm(e){
        e.preventDefault()
        this.props.history.push(`/results/${this.state.busqueda}`)
    }
    controlarInput(e){
        this.setState({
            busqueda: e.target.value
        }        
    )
    }
    render() {
        return (
            <form onSubmit={(e) => this.controlarForm(e)} className='search-form'>            
                <input type="text" onChange={(e) => this.controlarInput(e)} placeholder="Buscar..." /> 
                <button type="submit" className="btn btn-success btn-sm">Buscar</button> 
            </form> 
        )
    }
}
export default withRouter (FormularioBusqueda);