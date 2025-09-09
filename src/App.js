import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResultadosBusqueda from "./screens/ResultadosBusqueda/ResultadosBusqueda";
import Movie from "./screens/Movie/Movie";
import Serie from "./screens/Serie/Serie";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path='/results/:busuqeda' component={ResultadosBusqueda}/>
        <Route exact path="/movie/:id" component={Movie}/>
        <Route exact path="/serie/:id" component={Serie}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
