import React, { useEffect } from 'react';
import { getByCatFilterConditionRequest, getByCatFilterPriceRequest, getCategoryFilterRequest } from '../Redux/catalog/actionsCategoryFilter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCard from '../Components/ProductCard';
import style from '../Styles/Containers/Catalog.module.css'
import { UsePagination } from './Pagination';
import { PermanentDrawerLeft } from '../Components/LeftBarCategory';
import { SelectOrder } from '../Components/SelectOrder';
import Loading from '../Components/Loading'
export  function CatalogCategoryFilterContainer({search, value, categoria, getCategoryFilterRequest,getByCatFilterPriceRequest, getByCatFilterConditionRequest, numero=0, products, paging, order, filter, condition, categories  })  {
  console.log(categoria)
  // useEffect(() => {
  //     console.log(search)
  //   if (order){
  //     let price=order
  //     try {
  //       getByCatFilterPriceRequest(search, numero*30, price, value);
        
  //     } catch (error) {
  //       console.log(error);
  //     } 
  //   }
  // }, [getByCatFilterPriceRequest, order, numero])

  useEffect(() => {
    console.log(condition)
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
      <div className={style.contenedor}>
        <SelectOrder condition={condition} products={products} txt="products" />
        <div className={style.ContenedorPrincipal}>
          <div className={style.secundario}>
          <PermanentDrawerLeft txt="category" products={products}  filter={filter.available_sorts}></PermanentDrawerLeft>
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
          <UsePagination txt="products" cant={products.paging.total} number={numero} condition={condition}></UsePagination>

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
      ...bindActionCreators({ getCategoryFilterRequest, getByCatFilterConditionRequest, getByCatFilterPriceRequest }, dispatch)
    }
  
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CatalogCategoryFilterContainer)