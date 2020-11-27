import React from 'react';
import CategoriesList from '../Containers/CategoriesList'
// import { bindActionCreators } from 'redux';
import  style  from "../Styles/Components/LeftBar.module.css";
import { Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useState } from 'react';



export  function PermanentDrawerLeft({txt, search, filter, filters }) {
  const [ condition ] = useState([{id: "new", name: "Nuevo"}, {id: "used", name: "Usado"}])
  console.log(filter)



  return (
    
    <div className={style.Contenedor}>
      <div className={style.listaCategorias}>
        <div className="list-group" style={{ width: "100%"}}>
          <h4>Buscar por Orden</h4>
          <ul>
            {filter.map((text, i) => {
              return (
                <NavLink to={`/${txt}/${search}/order=${text.id}/${0}`} style={{listStyle:"none"}} className="list-group-item list-group-item-action">
                  <li key={`${text}${i}`} className={style.list}>{text.name}</li>      
                </NavLink>
                  )
                })}


          </ul>
        </div>
        <div>
          <h4>Buscar por Condición</h4>
          <ul>
            {condition.map((text, index) => {
              return (
                <NavLink to={`/${txt}/${search}/condition=${text.id}/${0}`} style={{listStyle:"none"}} className="list-group-item list-group-item-action">
                  <li className={style.list}>{text.name}</li>      
                </NavLink> 
              )
            }
            )}

          </ul>

        </div>
        {/* <div>
      
           <h3>Categorias</h3>
            {filters.map((text, index) => (
             
            <CategoriesList filterValues={text} type={txt} search={search}/>




           ))}
         </div> */}
      </div>
    </div>
  )

}

