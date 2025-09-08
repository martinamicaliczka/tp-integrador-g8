import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./styles.css"

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agregarAFavoritos: false,
            
        }
    }
    render() {
        return (
            <div>
                <Link to="/">Volver</Link>
            </div>
        )
    }
}

export default Detalle