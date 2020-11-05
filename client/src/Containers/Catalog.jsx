import Axios from 'axios';
import React, { useState, useEffect } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { CardDeck } from 'react-bootstrap'
import  ProductCard from '../Components/ProductCard'

export default function SimpleContainer({search}) {
  const [ products, setProducts ] = useState([])
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/search?search=${search}`)
    .then(res => {
      console.log(res.data)
      setProducts(res.data)
    }).catch(err => console.log(err))
  },[])
  if (products > 0){
    return (
      <div>
        {products.map((prod, i) => {
          
          <ProductCard
            key={prod.id}
            id={prod.id}
            title= {prod.title}
            price= {prod.price}
            currency_id= {prod.currency_id}
            quantity= {prod.available_quantity}
            image= {prod.thumbnail}
            condition= {prod.condition}
          />
        })}
      </div>
    );
  }else{
    return (
      <div>
        <h1>No hay productos que mostrar</h1>
      </div>
    )
  }
}

