import React from 'react'; 
import { Link } from "react-router-dom"; 
import FormularioBusqueda from '../FormularioBusqueda/FormularioBusqueda';
function Header() { 
    return (
    <div className="header-container">
        <h1>GIRLFLIX</h1>
        <nav className="nav-container"> 
        <ul className="nav nav-tabs my-4"> 
            <li className="nav-item"> 
                <Link to="/home" className="nav-link">Home</Link> </li> 
            <li className="nav-item"> 
                <Link to="/movies" className="nav-link">Películas</Link> </li> 
            <li className="nav-item"> 
                <Link to="/series" className="nav-link">Series</Link> </li> 
            <li className="nav-item"> 
                <Link to="/favorites" className="nav-link">Favoritas</Link> </li> 
        </ul> 
        <FormularioBusqueda/>
        </nav>
    </div>
) 
} 
export default Header;