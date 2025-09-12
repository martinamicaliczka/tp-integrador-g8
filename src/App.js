import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResultadosBusqueda from "./screens/ResultadosBusqueda/ResultadosBusqueda";
import Movie from "./screens/Movie/Movie";
import Serie from "./screens/Serie/Serie";
import Peliculas from "./screens/Peliculas/Peliculas";
import Error404 from "./screens/Error/Error404";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path='/results/:busuqeda' component={ResultadosBusqueda}/>
        <Route exact path='/movies' component={Peliculas}/>
        <Route exact path="/movie/:id" component={Movie}/>
        <Route exact path="/serie/:id" component={Serie}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
