import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResultadosBusqueda from "./screens/ResultadosBusqueda/ResultadosBusqueda";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path='/results/:busuqeda' component={ResultadosBusqueda}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
