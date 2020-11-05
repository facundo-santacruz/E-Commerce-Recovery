import React from 'react';

export default function ProductCard({title, price, id, currency_id, quantity, image, condition}) {

  console.log(price + "            " + title);
  return  (
    <div >
      <h1>{title}</h1>
      {/* <div  style={{ width: "250px", height: "320px", alignItems: "center" }} >
        
          <img src={image} alt="Imagen Producto" style={{ width: "200px", height: "200px" }} class="card-img-top" />
          <div >
            <h5 style={{ color: "black" }}>{title}</h5>
            <p style={{ color: "black" }}>${price}</p>
          </div>
        <div style={{ width: "250px", height: "42px" }}>
          <ul  style={{ width: "250px", height: "32px" }} >
            {/* <img  style={{ padding: "1px" }} src={Changuito} /> */}
          {/* </ul>
        </div>
      </div> */} 

    </div>

  )
}


