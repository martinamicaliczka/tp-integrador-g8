import React from 'react'; 
import { Link } from "react-router-dom"; 
function Header() { 
    return (
    <div>
        <h1>GIRLFLIX</h1>
        <nav> 
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
        <form className="search-form" action="/results" method="get"> 
            <input type="text" className="" name="searchData" placeholder="Buscar..."/> 
            <button ton type="submit" className="btn btn-success btn-sm">Buscar</button> 
        </form> 
        </nav>
    </div>
    
    ) 
} 
export default Header;