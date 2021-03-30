import React, { useEffect } from 'react';
import { getByCatConditionRequest,  getCategoryRequest } from '../Redux/catalog/actionsCategory';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCard from '../Components/ProductCard';
import style from '../Styles/Containers/Catalog.module.css'
import { UsePagination } from './PaginationCategory';
import { PermanentDrawerLeft } from '../Components/LeftBarCategory';
import Loading from '../Components/Loading'
import { SelectOrder } from '../Components/SelectorderCategory';
export  function CatalogCategoryContainer({search,  getCategoryRequest, getByCatConditionRequest, numero=0, products, paging, order, filter, condition, categories  })  {
  

  useEffect(() => {
    if(condition){
      try {
        getByCatConditionRequest(numero, condition);
        
      } catch (error) {
        console.log(error);
      }
    
    }
  }, [getByCatConditionRequest, numero, condition, search])
    
  useEffect(() => {
    if(!condition){
      try {
        getCategoryRequest(search, numero)
        // console.log(loadStorage({query: search, offset:numero*30})); 
      } catch (error) {
        console.log(error);
      }

    }
  }, [getCategoryRequest, numero, search])


  if (products && products.results.length > 0){
    return (
      <div className={style.contenedor}>
        <SelectOrder condition={condition} products={products} txt="category" />
        <div className={style.ContenedorPrincipal}>
          <div className={style.secundario}>
            <PermanentDrawerLeft key={categories.available_filters.id} txt="category" products={products} filters={categories.available_filters} filter={filter.available_sorts} search={search} price={order}></PermanentDrawerLeft>
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
        <UsePagination txt="category" search={search} cant={products.paging.total} number={numero} condition={condition}></UsePagination>

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
      ...bindActionCreators({ getCategoryRequest, getByCatConditionRequest }, dispatch)
    }
  
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CatalogCategoryContainer)