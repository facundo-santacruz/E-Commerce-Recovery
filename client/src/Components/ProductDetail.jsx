import React, { useEffect } from 'react';
import style from '../Styles/Components/ProductCard.module.css'

export default function RecipeReviewCard({title, price, id, currency_id, quantity, image, condition}) {
    useEffect(() => {

    },[])
  return (
    <div className={style.cardProd}  >
      <div style={{width:"160px", height:"160px", marginLeft:"10%"  }}>
        <img src={image} className={`card-img-top ${style.imagen}`} alt={title} />

      </div>
      <div className="card-body" style={{marginLeft:"10%",  width: "50%"}} >
        <p className="card-text">{title}</p>
        <div className={style.ContPrecio} style={{display:"flex", alignItems: "center", justifyContent: "space-around"}}>
          <h3 className="card-title">{currency_id} ${price}</h3> 
          {condition === "new" ? <span style={{backgroundColor:"green", color:"white"}}>  {condition}  </span> :
           <span style={{backgroundColor:"orange", color:"white"}}>{condition}</span>  }
        </div>
       {quantity > 0 ? <p style={{textAlign: "center"}}className="card-text"><small className="text-muted">Disponibilidad: {quantity} unidad/es</small></p> : 
      <h3 style={{backgroundColor:"gray", color:"white"}}> Sin Stock</h3>}
      </div> 
        
    </div>
  );
}


