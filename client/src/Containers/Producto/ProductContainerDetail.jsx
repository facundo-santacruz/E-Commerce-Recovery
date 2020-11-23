import React, { useEffect } from 'react';

import { getProductRequest } from '../../Redux/catalog/actionsSearch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import style from './Catalog.module.css'
export  function ProductContainerDetail({id,  getProductRequest, product})  {
 
  useEffect(() => {

    try {
      getProductRequest(id);
      
    } catch (error) {
      console.log(error);
    }
    }, [getProductRequest, id])
  
    
       return (
              <div>
              </div>
       )
  }

const mapStateToProps = state => {
  
  return {
       product: state.product
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      ...bindActionCreators({ getProductRequest }, dispatch)
    }
  
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductContainerDetail)