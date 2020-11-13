import React from 'react';
import style from './ProductCard.module.css'

export default function RecipeReviewCard({title, price, id, currency_id, quantity, image, condition}) {

  return (
    <div className={`col col-lg-3 col-md-4 ${style.CardProd}`}  >
      <img src={image} className={`card-img-top ${style.imagen}`} alt={title} />
      <div className="card-body" >
        <div className={style.ContPrecio}>
          <h3 className="card-title">{currency_id} ${price}</h3> 
          {condition === "new" ? <span style={{backgroundColor:"green", color:"white"}}>{condition}</span> :
           <span style={{backgroundColor:"orange", color:"white"}}>{condition}</span>  }
        </div>
        <p className="card-text">{title}</p>
      </div>
       {quantity > 0 ? <p className="card-text"><small className="text-muted">Disponibilidad: {quantity} unidades</small></p> : 
        <h3 style={{backgroundColor:"gray", color:"white"}}> Sin Stock</h3>}
        
    </div>
  );
}



