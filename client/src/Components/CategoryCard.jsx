import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../Styles/Containers/Categories.module.css'

export default function CategoryCard({ id, picture, name}) {

  return (
    <NavLink to={`/category/${id}/0`}>
      <div className={style.cardProd}  >

        <div style={{width:"160px", height:"160px", marginLeft:"10%"  }}>
          <img src={picture} className={`card-img-top ${style.imagen}`} alt={name} />

        </div>
        <div className="card-body" style={{marginLeft:"10%"}} >
          <p className="card-text">{name}</p>
        </div> 
          
      </div>
    </NavLink>
  );
}