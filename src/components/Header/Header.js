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
                    <Link to="/" className="nav-link nav-color nav-compu">Home</Link> 
                    <Link to="/" className="nav-link nav-color nav-celu" aria-label="Home" title="Home">
                        <img src="/img/casa.png" alt="" className="nav-icon"/>
                    </Link> 
                </li> 
                <li className="nav-item"> 
                    <Link to="/movies" className="nav-link nav-color nav-compu">Películas</Link>  
                    <Link to="/movies" className="nav-link nav-color nav-celu" aria-label="peliculas" title="peliculas">
                        <img src="/img/claqueta.png" alt="" className="nav-icon"/>
                    </Link> 
                </li> 
                <li className="nav-item"> 
                    <Link to="/series" className="nav-link nav-color nav-compu">Series</Link>
                    <Link to="/series" className="nav-link nav-color nav-celu" aria-label="series" title="series">
                        <img src="/img/televisor.png" alt="" className="nav-icon"/>
                    </Link>  
                </li>
                <li className="nav-item"> 
                    <Link to="/favorites" className="nav-link nav-color nav-compu">Favoritas</Link>
                    <Link to="/favorites" className="nav-link nav-color nav-celu" aria-label="favorites" title="favorites">
                        <img src="/img/corazon.png" alt="" className="nav-icon"/>
                    </Link>  
                </li> 
            </ul> 
            <div className="buscador">
                <FormularioBusqueda/>
            </div>
        </nav>
    </div>
) 
} 
export default Header;