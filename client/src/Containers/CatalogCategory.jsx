import React, { useEffect } from 'react';
import { getByCatConditionRequest, getByCatPriceRequest, getCategoryRequest } from '../Redux/catalog/actionsCategory';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCard from '../Components/ProductCard';
import style from '../Styles/Containers/Catalog.module.css'
import { UsePagination } from './PaginationCategory';
import { PermanentDrawerLeft } from '../Components/LeftBar';
import Loading from '../Components/Loading'
export  function CatalogCategoryContainer({search,  getCategoryRequest,getByCatPriceRequest, getByCatConditionRequest, numero=0, products, paging, order, filter, condition, categories  })  {

  useEffect(() => {
      console.log(search)
    if (order){
      let price=order
      try {
        getByCatPriceRequest(search, numero*30, price=order, search);
        
      } catch (error) {
        console.log(error);
      } 
    }
  }, [getByCatPriceRequest, order, numero])

  useEffect(() => {
    if(condition){
      try {
        getByCatConditionRequest(search, numero*30, condition);
        
      } catch (error) {
        console.log(error);
      }
    
    }
  }, [getByCatConditionRequest, numero, condition])
    
  useEffect(() => {
    if(!condition && !order){
      try {
        getCategoryRequest(search, numero*30)
        // console.log(loadStorage({query: search, offset:numero*30})); 
      } catch (error) {
        console.log(error);
      }

    }
  }, [getCategoryRequest, numero, search])


  if (products && products.results.length > 0){
    return (
      <div className={style.contenedor}>
        <div className={style.ContenedorPrincipal}>
          <div className={style.secundario}>
            <PermanentDrawerLeft txt="products" filters={categories.available_filters} filter={filter.available_sorts} search={search} price={order}></PermanentDrawerLeft>
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
        <UsePagination txt="products" search={search} paging={paging.paging} order={order} condition={condition}></UsePagination>

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
      ...bindActionCreators({ getCategoryRequest, getByCatConditionRequest, getByCatPriceRequest }, dispatch)
    }
  
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CatalogCategoryContainer)