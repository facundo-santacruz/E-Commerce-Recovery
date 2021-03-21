import React from 'react';
import {  NavLink } from 'react-router-dom';

import style from '../Styles/Containers/Categories.module.css'

export default function CategoryCard({ id, picture, name}) {

  return (
    <NavLink to={`/category/category=${id}/1`} className={style.cardProd} activeClassName="selected">
      {/* <div style={{width:"160px", height:"160px", marginLeft:"10%"  }}> */}
        <img src={picture} className={style.imagen} alt={name} />
      {/* </div> */}
      <p className={style.text}>{name}</p>
    </NavLink>
  );
}