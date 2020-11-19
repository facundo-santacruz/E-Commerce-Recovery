import React, { useEffect } from 'react';

import { getProductRequest } from '../../Redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import style from './Catalog.module.css'
export  function ProductContainerDetail({id,  getProductRequest, product})  {
 
//   useEffect(() => {

//     try {
//       getProductRequest(id);
      
//     } catch (error) {
//       console.log(error);
//     }
//     }, [getProductRequest, id])
  
    
       return (
              <div>
              </div>
       )
  }

const mapStateToProps = state => {
  const  product  = state  
  return {
       product
    }
  }
  const mapDispatchToProps = dispatch => {
    // return {
    //   dispatch,
    //   ...bindActionCreators({ getProductRequest }, dispatch)
    }
  
//   }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductContainerDetail)