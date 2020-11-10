
import './App.css';
import SimpleContainer from './Containers/Catalog';
import Nav from './Containers/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PermanentDrawerLeft from './Components/LeftBar';
import { UsePagination } from './Containers/Pagination';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      
        <Route path="/" component={Nav} />
        <div style={{ display: "flex", marginLeft: "10%",  width: "80%"}}>
          
            <Route exact path="/products/search=:busqueda" render={({match}) => <SimpleContainer search={match.params.busqueda}/>} />
            {/* <Route  path="/products" render={({match}) => <PermanentDrawerLeft />} /> */}
            {/* <Route  path="/products" render={({}) => <UsePagination/>} /> */}
            <Route exact path="/products/:busqueda/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} numero={match.params.numero}/>} />
            <Route exact path="/products/:busqueda/order=:order/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} order={match.params.order} numero={match.params.numero}/>} />
            <Route exact path="/products/:busqueda/condition=:condition/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} condition={match.params.condition} numero={match.params.numero}/>} />
          
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
