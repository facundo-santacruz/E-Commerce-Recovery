import React, { useEffect } from 'react';
import { getByPriceRequest, getProductsRequest, getByConditionRequest } from '../Redux/catalog/actionsSearch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCard from '../Components/ProductCard';
import style from '../Styles/Containers/Catalog.module.css'
import { UsePagination } from './Pagination';
import { PermanentDrawerLeft } from '../Components/LeftBar';
import { SelectOrder } from '../Components/SelectOrder';
import Loading from '../Components/Loading'
export  function SimpleContainer({search,  getProductsRequest, getByConditionRequest,getByPriceRequest, numero=0, products, paging, filter, condition, categories  })  {
  
  useEffect(() => {
    console.log(condition)
    if(condition){ 
      // condition = condition.length === 0 ? [] : condition.split("&").split("0")
      try {
        getByConditionRequest(search, numero, condition);
     
      } catch (error) {
        console.log(error);
      }
      
    }
  }, [getByConditionRequest, numero, condition,search])
  
  useEffect(() => {
    if(!condition){
            try {
              getProductsRequest(search, numero)
              // console.log(loadStorage({query: search, offset:numero*30})); 
            } catch (error) {
              console.log(error);
            }
            
          }
        }, [getProductsRequest, numero, search])
        
    
    

    if (products && products.results.length > 0){
      return (
        <div className={style.contenedor}>
          <SelectOrder condition={condition} products={products} txt="products" />
          <div className={style.ContenedorPrincipal}>
            <div className={style.secundario}>
              <PermanentDrawerLeft txt="products" products={products}  filter={filter.available_sorts} search={search}></PermanentDrawerLeft>
              <div className={style.ContenedorCartasPag} >
                <div className={style.cartas}>
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
              </div>
              
            </div>

          </div>
          <UsePagination txt="products" search={search} cant={products.paging.total} number={numero} condition={condition}></UsePagination>

        </div>
      );
    }else{
      return (
        <Loading></Loading>
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
  
  