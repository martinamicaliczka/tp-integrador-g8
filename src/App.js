import React from "react"
import { Switch, Route, Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResultadosBusqueda from "./screens/ResultadosBusqueda/ResultadosBusqueda";
import Movie from "./screens/Movie/Movie";
import Serie from "./screens/Serie/Serie";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Error404 from "./screens/Error/Error404";
import Favorites from "./screens/Favorites/Favorites";
import Home from "./screens/Home/Home";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path='/results/:tipo/:busqueda' component={ResultadosBusqueda}/>
        <Route path='/movies' component={Peliculas}/>
        <Route path='/series' component={Series}/>
        <Route exact path="/movie/:id" component={Movie}/>
        <Route exaxct path="/serie/:id" component={Serie}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="*" component={Error404}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  )
}
export default App;