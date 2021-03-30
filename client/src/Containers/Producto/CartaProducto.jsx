import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getSellerRequest } from "../../Redux/catalog/actionsProduct";
import style from '../../Styles/Components/CartaProducto.module.css'
import Rating from './Rating';

const Cartaproducto = ({product, seller, getSellerRequest}) => {

  useEffect( () => {
    const datos = async() =>{
      try {
        await getSellerRequest(product.seller_id);
      } catch (error) {
        console.log(error);
      }

    }
  datos()
  }, [product.seller_id, getSellerRequest])

  return (
      <div className={style.detail}>
          <div className={style.detContenido}>
            <div className={style.detEncabezado}>
            {product.condition === "new" ? <label>Nuevo</label> : <label>Usado</label>}
            <label > | {product.sold_quantity} vendidos</label>
            </div>
            <h2 style={{ marginBlockEnd: "0"}}>{product.title}</h2>
            <Rating valor={product.id}></Rating>
            <h2 className={style.precio}>$ {product.price}</h2>
            {typeof(seller) !== "undefined" ?
            <h3> Vendido por {seller.seller.nickname}</h3> :null
            }
            {product.available_quantity > 0 ? <h2 className={style.disponible}>Stock Disponible</h2> : <h2>Sin Stock</h2>}
            {product.available_quantity > 0 ?  <h3>{product.available_quantity} unidad/es.</h3> : null}
          </div>
      </div>
  )
}


const mapStateToProps = state => {
  return {
        seller: state.seller.data
    }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({ getSellerRequest }, dispatch)
  }
}
    
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cartaproducto)

