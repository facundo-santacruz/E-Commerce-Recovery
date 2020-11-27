
import './App.css';
import SimpleContainer from './Containers/Catalog';
import Nav from './Containers/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import CarouselContainer from "./Containers/Carrousel";  
import { Categories } from './Containers/Categories'
import ProductContainerDetail  from "./Containers/Producto/ProductContainerDetail";
import CatalogCategory from './Containers/CatalogCategory';
import CatalogCategoryFilter from './Containers/CatalogCategoryFilter';


function App() {  
  return (
    <div className="App" style={{background: "#ededed"}}>
      <BrowserRouter >
      
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Categories} />
        <div >
          
            {/* <Route exact path="/products/search=:busqueda" render={({match}) => <SimpleContainer search={match.params.busqueda}/>} /> */}
            
            {/* <Route  path="/products" render={({match}) => <PermanentDrawerLeft />} /> */}
            {/* <Route  path="/products" render={({}) => <UsePagination/>} /> */}
            <Route exact path="/products/:busqueda/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} numero={match.params.numero}/>} />
            <Route exact path="/products/:busqueda/order=:order/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} order={match.params.order} numero={match.params.numero}/>} />
            <Route exact path="/products/:busqueda/condition=:condition/:numero" render={({match}) => <SimpleContainer search={match.params.busqueda} condition={match.params.condition} numero={match.params.numero}/>} />
            <Route exact path="/product/:title" render ={({match}) => <ProductContainerDetail id={match.params.title}/>}/>
            <Route exact path="/category/:category/:numero" render ={({match}) => <CatalogCategory search={match.params.category} numero={match.params.numero}/>} />
            <Route exact path="/category/:busqueda/order=:order/:numero" render={({match}) => <CatalogCategory search={match.params.busqueda} order={match.params.order} numero={match.params.numero}/>} />
            <Route exact path="/category/:busqueda/condition=:condition/:numero" render={({match}) => <CatalogCategory search={match.params.busqueda} condition={match.params.condition} numero={match.params.numero}/>} />
            
            <Route exact path="/products/:busqueda/:category/:id/:numero" render ={({match}) => <CatalogCategoryFilter search={match.params.busqueda} categoria={match.params.category} value={match.params.id} numero={match.params.numero}/>} />
            {/* <Route exact path="/category/:busqueda/order=:order/:numero" render={({match}) => <CatalogCategory search={match.params.busqueda} order={match.params.order} numero={match.params.numero}/>} />
            <Route exact path="/category/:busqueda/condition=:condition/:numero" render={({match}) => <CatalogCategory search={match.params.busqueda} condition={match.params.condition} numero={match.params.numero}/>} />
             */}
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
