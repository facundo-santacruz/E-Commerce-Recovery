import React from 'react';
import {  NavLink } from 'react-router-dom';

import style from '../Styles/Containers/Categories.module.css'

export default function CategoryCard({ id, picture, name}) {

  return (
    <NavLink to={`/category/category=${id}/1`} className={style.cardProd} activeClassName="selected">
        <img src={picture} className={style.imagen} alt={name} />
        <p className={style.text}>{name}</p>
    </NavLink>
  );
}