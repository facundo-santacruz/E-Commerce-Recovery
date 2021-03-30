import React, { useEffect, useState } from 'react';

import { getProductRequest } from '../../Redux/catalog/actionsSearch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from '../../Styles/Components/Img.module.css'
import CartaProducto from './CartaProducto';
function ProductContainerDetail({id,  getProductRequest, product })  {
  const [imag, setImg] = useState("");
  
  useEffect( () => {
    const datos = async() =>{
      try {
        await getProductRequest(id);
        setImg(product.pictures[0].url)
        // await getSellerRequest(product.seller_id)
      } catch (error) {
        console.log(error);
      }

    }
    datos()
    }, [getProductRequest, product.pictures[0].url])
    
    if (product){
      return (
        <div className={style.contPrincipal}>
            <div className={style.contenedor}>
              <div className={style.segContenedor}>
                <div className={style.imagenes}>
                {product.pictures.map((imagen, i) => {
                  return (
                    <img key={`img${i}`} onMouseOverCapture={() => setImg(imagen.url)} className={style.imagen} src={imagen.url} alt="Imagen"/>
                  )
                } )}
    
                </div>
                <figure className={style.contImgGde}>
                  <img src={imag} alt="Imagen" className={style.imgGrande}/>
                </figure>

              </div>
              <CartaProducto product={product} /> 
            </div>

        </div>
      )

    }else{
      return (
        <div>
          <h1>El producto no existe</h1>
        </div>
      )
    }
  }

const mapStateToProps = state => {
  
  return {
       product: state.product.data
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