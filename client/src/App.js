
import './App.css';
import SimpleContainer from './Containers/Catalog';
import Nav from './Containers/Nav';
import { BrowserRouter, Route } from "react-router-dom";
// import PermanentDrawerLeft from './Components/LeftBar';
// import { UsePagination } from './Containers/Pagination';
// import CarouselContainer from "./Containers/Carrousel";  
import { Categories } from './Containers/Categories'
import ProductContainerDetail  from "./Containers/Producto/ProductContainerDetail";

function App() {  
  return (
    <div className="App" style={{background: "#ededed"}}>
      <BrowserRouter >
      
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Categories} />
        <div >
          
            <Route exact path="/products/search=:busqueda" render={({match}) => <SimpleContainer search={match.params.busqueda}/>} />
            
            {/* <Route  path="/products" render={({match}) => <PermanentDrawerLeft />} /> */}
            {/* <Route  path="/products" render={({}) => <UsePagination/>} /> */}
            <Route exact path="/products/:busqueda/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} numero={match.params.numero}/>} />
            <Route exact path="/products/:busqueda/order=:order/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} order={match.params.order} numero={match.params.numero}/>} />
            <Route exact path="/products/:busqueda/condition=:condition/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} condition={match.params.condition} numero={match.params.numero}/>} />
            <Route exact path="/product/:title" render ={({match}) => <ProductContainerDetail id={match.params.title}/>}/>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
