import React from 'react';
import style from './ProductCard.module.css'

export default function RecipeReviewCard({title, price, id, currency_id, quantity, image, condition}) {

  return (
    <div className={`card ${style.cardProd}`}>
      <img src={image} className={`card-img-top ${style.imagen}` } alt={title} />
      <div className="card-body" >
        <h5 className="card-title">{currency_id} ${price}</h5> <span style={{backgroundColor:"green", color:"white"}}>{condition}</span>
        <p className="card-text">{title}</p>
      </div>
        <p className="card-text"><small className="text-muted">Disponibilidad: {quantity} unidades</small></p>
    </div>
  );
}



