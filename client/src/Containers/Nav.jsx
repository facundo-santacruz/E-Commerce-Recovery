import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {  Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import {  makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import MercadoLibre from '../Styles/Imagenes/MercadoLibre1.jpeg'
import  style  from "../Styles/Containers/Nav.module.css";



export default function SearchAppBar() {
  const [ search, setSearch ] = useState("")


 
  function handleChange(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      var boton = document.getElementById("boton");
      boton.click();
  }
    setSearch(e.target.value)
    
    
  }

  return (
    <div className={style.principal} >
      <NavLink to={"/"}>
        <img src={MercadoLibre} alt="Imagen MercadoLibre" className={style.img}></img>
      </NavLink>
      <div className={ style.buscador}>
        
        <input
          type="text"
          placeholder="Buscar productos, marcas y  más..."
          value={search}
          onChange={handleChange}
          className={style.text}
        />
        <NavLink to={`/products/${search}/0`}>
          <button id="boton" className={style.boton}>
            Buscar
          </button>
        </NavLink>
      </div>
    
    </div>
  );
}
