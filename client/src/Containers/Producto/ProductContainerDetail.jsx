import React, { useEffect, useState } from 'react';

import { getProductRequest } from '../../Redux/catalog/actionsSearch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from '../../Styles/Components/Img.module.css'
import Rating from './Rating';
function ProductContainerDetail({id,  getProductRequest, product})  {
  const [img, setImg] = useState("");
  useEffect( () => {
    const datos = async() =>{
      try {
        await getProductRequest(id);
        setImg(product.pictures[0].url);
      } catch (error) {
        console.log(error);
      }

    }
    datos()
    }, [getProductRequest, id])
    if (product && product.pictures){
      return (
        <div className={style.contPrincipal}>
            <div className={style.contenedor}>
              <div className={style.imagenes}>
              {product.pictures.map((imagen, i) => {
                return (
                  <img key={`img${i}`} onMouseOverCapture={() => setImg(imagen.url)} className={style.imagen} src={imagen.url} alt="Imagen"/>
                )
              } )}
  
              </div>
              <figure className={style.contImgGde}>
                <img src={img} alt="Imagen" className={style.imgGrande}/>
              </figure>
              <div className={style.detail}>
                <div className={style.detContenido}>

                  <div className={style.detEncabezado}>
                    {product.condition === "new" ? <label>Nuevo</label> : <label>Usado</label>}
                    <label > | {product.sold_quantity} vendidos</label>
                  </div>
                  <h2 style={{ marginBlockEnd: "0"}}>{product.title}</h2>
                  <Rating valor={product.id}></Rating>
                  <h2>${product.price}</h2>
                </div>
              </div>
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