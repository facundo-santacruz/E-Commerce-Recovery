
import './App.css';
import SimpleContainer from './Containers/Catalog';
import MenuAppBar from './Containers/Nav';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Route path="/" component={MenuAppBar} />
        <Route exact path="/products/search=:busqueda" render={({match}) => <SimpleContainer search={match.params.busqueda}/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
