import React from "react"
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
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
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/results/:busuqeda' component={ResultadosBusqueda}/>
        <Route exact path='/movies' component={Peliculas}/>
        <Route exact path='/series' component={Series}/>
        <Route exact path="/movie/:id" component={Movie}/>
        <Route exact path="/serie/:id" component={Serie}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;