
import React, {  useEffect, useCallback, useState } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { getProductsRequest } from '../Redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCard from '../Components/ProductCard';


export  function SimpleContainer({search,  getProductsRequest, products}) {
  const [ prod, setProducts ] = useState([])
  // const stableSetter = useCallback(() => getProductsRequest(search), [])
const [busqueda, setBusqueda ] = useState(search)

  useEffect(() => {
    // const searchProducts = () => {
    //   getProductsRequest(search)
    // }
    // searchProducts()
    try {
      getProductsRequest(search);
      
    } catch (error) {
      console.log(error);
    }
    }, [getProductsRequest, search])
  
      
  console.log(products)
  if (products && products.length > 0){
    return (
      <div>
        {products.forEach((prod) => {
          <ProductCard
            key={prod.id}
            id={prod.id}
            title= {prod.title}
            price= {prod.price}
            currency_id= {prod.currency_id}
            quantity= {prod.available_quantity}
            image= {prod.thumbnail}
            condition= {prod.condition}
          />
        })}
      </div>
    );
  }else{
    return (
      <div>
        <h1>No hay productos que mostrar</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
     products:state.products
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({ getProductsRequest }, dispatch)
  }

}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleContainer)

