import React, { useEffect } from 'react';
import { getByCatFilterConditionRequest, getByCatFilterPriceRequest, getCategoryFilterRequest } from '../Redux/catalog/actionsCategoryFilter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCard from '../Components/ProductCard';
import style from '../Styles/Containers/Catalog.module.css'
import { UsePagination } from './Pagination';
import { PermanentDrawerLeft } from '../Components/LeftBar';
export  function CatalogCategoryFilterContainer({search, value, categoria, getCategoryFilterRequest,getByCatFilterPriceRequest, getByCatFilterConditionRequest, numero=0, products, paging, order, filter, condition, categories  })  {

  useEffect(() => {
      console.log(search)
    if (order){
      let price=order
      try {
        getByCatFilterPriceRequest(search, numero*30, price=order, value);
        
      } catch (error) {
        console.log(error);
      } 
    }
  }, [getByCatFilterPriceRequest, order, numero])

  useEffect(() => {
    if(condition){
      try {
        getByCatFilterConditionRequest(search, numero*30, condition);
        
      } catch (error) {
        console.log(error);
      }
    
    }
  }, [getByCatFilterConditionRequest, numero, condition])
    
  useEffect(() => {
    if(!condition && !order){
      try {
        getCategoryFilterRequest(search, numero*30, categoria ,value)
        // console.log(loadStorage({query: search, offset:numero*30})); 
      } catch (error) {
        console.log(error);
      }

    }
}, [getCategoryFilterRequest, numero, search, value])


    if (products && products.results.length > 0){
      return (
        <div className={style.ContenedorPrincipal}>
          
            <PermanentDrawerLeft txt="category" filters={categories.available_filters} filter={filter.available_sorts} search={search} price={order}></PermanentDrawerLeft>
             
          <div className={style.cartas} >
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
            <UsePagination text="category" search={search} paging={paging.paging} order={order} condition={condition}></UsePagination>
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
      ...bindActionCreators({ getCategoryFilterRequest, getByCatFilterConditionRequest, getByCatFilterPriceRequest }, dispatch)
    }
  
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CatalogCategoryFilterContainer)