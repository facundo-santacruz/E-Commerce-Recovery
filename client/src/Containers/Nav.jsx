import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MercadoLibre from '../Styles/Imagenes/MercadoLibre1.jpeg'
import  style  from "../Styles/Containers/Nav.module.css";



export default function SearchAppBar() {
  const [ search, setSearch ] = useState("")


 
  function handleChange(e) {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefaukt()
  }

  return (
    <form onSubmit={handleSubmit} className={style.principal} >
      <div className={style.secundario}>

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
          {search.length > 1 ? 
            <NavLink to={`/products/${search}/1`}>
              <button id="boton" className={style.boton}>
                Buscar
              </button>
            </NavLink> : 
            <div>
              <button id="boton" disabled={!search} className={style.boton}>
              Buscar
            </button>
          </div> 
          }
        </div>
      
      </div>
    </form>
  );
}
