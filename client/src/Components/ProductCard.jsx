import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Styles/Components/ProductCard.module.css'

export default function RecipeReviewCard({title, price, id, currency_id, quantity, image, condition}) {

  return (
    // <div className={style.cardProd}  >
      <NavLink 
        to={`/product/${id}`} 
        className={style.cardProd}>
         <img src={image} className={style.imagen} alt={title} />
        <div className={style.detailProd} >
          <p >{title}</p>
          <div className={style.ContPrecio} >
            <h3>{currency_id} ${price}</h3> 
            {condition === "new" ? <span style={{backgroundColor:"green", color:"white"}}>  Nuevo  </span> :
            <span style={{backgroundColor:"orange", color:"white"}}> Usado</span>  }
          </div>
        {quantity > 0 ? <p style={{textAlign: "center"}}><small>Disponibilidad: {quantity} unidad/es</small></p> : 
        <h3 style={{backgroundColor:"gray", color:"white"}}> Sin Stock</h3>}
        </div> 
          
      </NavLink>
    // </div>
  );

}



