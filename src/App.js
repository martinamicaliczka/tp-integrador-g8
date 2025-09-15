import React from "react"
import {  Switch, Route } from 'react-router-dom';
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResultadosBusqueda from "./screens/ResultadosBusqueda/ResultadosBusqueda";
import Movie from "./screens/Movie/Movie";
import Serie from "./screens/Serie/Serie";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Error404 from "./screens/Error/Error404";
import Home from "./screens/Home/Home";
import Favorites from "./screens/Favorites/Favorites";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/results/:busuqeda' component={ResultadosBusqueda}/>
        <Route  path='/movies' component={Peliculas}/>
        <Route  path='/series' component={Series}/>
        <Route  path="/movie/:id" component={Movie}/>
        <Route  path="/serie/:id" component={Serie}/>
        <Route  path="/favorites" component={Favorites}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;