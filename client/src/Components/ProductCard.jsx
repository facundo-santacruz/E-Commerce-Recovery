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
        <div className={style.detailProd} style={{marginLeft:"10%",  width: "50%"}} >
          <p className="card-text">{title}</p>
          <div className={style.ContPrecio} style={{display:"flex", alignItems: "center", justifyContent: "space-around"}}>
            <h3 className="card-title">{currency_id} ${price}</h3> 
            {condition === "new" ? <span style={{backgroundColor:"green", color:"white"}}>  {condition}  </span> :
            <span style={{backgroundColor:"orange", color:"white"}}>{condition}</span>  }
          </div>
        {quantity > 0 ? <p style={{textAlign: "center"}}className="card-text"><small className="text-muted">Disponibilidad: {quantity} unidad/es</small></p> : 
        <h3 style={{backgroundColor:"gray", color:"white"}}> Sin Stock</h3>}
        </div> 
          
      </NavLink>
    // </div>
  );

}



