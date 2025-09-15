import React from 'react'; 
import { Link } from "react-router-dom"; 
import FormularioBusqueda from '../FormularioBusqueda/FormularioBusqueda';
import './styles.css'
function Header() { 
    return (
    <div className="header-container">
        <Link to='/' className='girl-flix'> 
            <h1>GIRLFLIX</h1>
        </Link>
        <nav className="nav-container"> 
        <ul className="nav nav-tabs my-4"> 
            <li className="nav-item"> 
                <Link to="/" className="nav-link nav-color">Home</Link> </li> 
            <li className="nav-item"> 
                <Link to="/movies" className="nav-link nav-color">Películas</Link> </li> 
            <li className="nav-item"> 
                <Link to="/series" className="nav-link nav-color">Series</Link> </li> 
            <li className="nav-item"> 
                <Link to="/favorites" className="nav-link nav-color">Favoritas</Link> </li> 
        </ul> 
        <FormularioBusqueda/>
        </nav>
    </div>
) 
} 
export default Header;