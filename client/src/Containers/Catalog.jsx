import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { getByPriceRequest, getProductsRequest, getByConditionRequest } from '../Redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCard from '../Components/ProductCard';
import style from './Catalog.module.css'
import { UsePagination } from './Pagination';
import { PermanentDrawerLeft } from '../Components/LeftBar';
export  function SimpleContainer({search,  getProductsRequest, getByConditionRequest,getByPriceRequest, numero=0, products, paging, order, filter, condition, categories  })  {
  // const [ prod, setProducts ] = useState([])
  // const stableSetter = useCallback(() => getProductsRequest(search), [])
// const [busqueda, setBusqueda ] = useState(search)

  useEffect(() => {
    if (order){
      let price=order
      try {
        getByPriceRequest(search, numero*30, price=order, search);
        
      } catch (error) {
        console.log(error);
      } 
    }
  }, [getByPriceRequest, order, numero])

  useEffect(() => {
    if(condition){
      try {
        getByConditionRequest(search, numero*30, condition);
        
      } catch (error) {
        console.log(error);
      }
    
    }
  }, [getByConditionRequest, numero, condition])
    
  useEffect(() => {
    if(!condition && !order){
      try {
        getProductsRequest(search, numero*30)
        // console.log(loadStorage({query: search, offset:numero*30})); 
      } catch (error) {
        console.log(error);
      }

    }
}, [getProductsRequest, numero, search])


    if (products && products.results.length > 0){
      return (
        <div className={style.ContenedorPrincipal}>
          
            <PermanentDrawerLeft filters={categories.available_filters} filter={filter.available_sorts} search={search} price={order}></PermanentDrawerLeft>
             
          <div >
            <div >
              {products.results.map((prod) => {
                return (
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
                )
            })}
            </div>
            <UsePagination search={search} paging={paging.paging} order={order} condition={condition}></UsePagination>
          </div>

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
       products: state.products.data,
       paging: state.products.data,
       filter: state.products.data, 
       categories: state.products.data, 
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      ...bindActionCreators({ getProductsRequest, getByConditionRequest, getByPriceRequest }, dispatch)
    }
  
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SimpleContainer)
  
  

// import React, {  useEffect, useCallback, useState } from 'react';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import Typography from '@material-ui/core/Typography';
// // import Container from '@material-ui/core/Container';
// import { getProductsRequest } from '../Redux/actions';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import ProductCard from '../Components/ProductCard';


// export  function SimpleContainer({search,  getProductsRequest, products}) {
//   const [ prod, setProducts ] = useState([])
//   // const stableSetter = useCallback(() => getProductsRequest(search), [])
// const [busqueda, setBusqueda ] = useState(search)

//   useEffect(() => {
//     // const searchProducts = () => {
//     //   getProductsRequest(search)
//     // }
//     // searchProducts()
//     try {
//       getProductsRequest(search);
      
//     } catch (error) {
//       console.log(error);
//     }
//     }, [getProductsRequest, search])
  
      
//   console.log(products)
//   if (products && products.length > 0){
//     return (
//       <div >
//         {products.map((prod) => {
//           return (
//             <ProductCard  
//               key={prod.id}
//               id={prod.id}
//               title= {prod.title}
//               price= {prod.price}
//               currency_id= {prod.currency_id}
//               quantity= {prod.available_quantity}
//               image= {prod.thumbnail}
//               condition= {prod.condition}
//             />

//           )
//         })}
//       </div>
//     );
//   }else{
//     return (
//       <div>
//         <h1>No hay productos que mostrar</h1>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//      products:state.products
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     dispatch,
//     ...bindActionCreators({ getProductsRequest }, dispatch)
//   }

// }



// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SimpleContainer)

