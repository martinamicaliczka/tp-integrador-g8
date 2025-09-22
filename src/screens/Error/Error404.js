import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
export default class Error404 extends Component {
    render() {
        return (
            <div className="nf-404">
                <div className="nf-404__card">
                    <div className="nf-404__code">
                        404
                    </div>
                        <h2 className="nf-404__title">Contenido inexistente</h2>
                        <p className="nf-404__text">La página que buscás no existe o fue movida. Probá volver al inicio o explorar nuestro catálogo.</p>
                    <hr className="nf-404__divider" />
                    <Link to="/" className="nf-404__btn nf-404__btn--primary ver-mas">Volver al inicio</Link>
                    <Link to="/movies" className="nf-404__btn ver-mas">Explorar películas</Link>
                </div>
            </div>
        )
    }
}