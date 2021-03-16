import React from 'react';
import CategoriesList from '../Containers/CategoriesList'
// import { bindActionCreators } from 'redux';
import  style  from "../Styles/Components/LeftBar.module.css";
import { Link, NavLink, useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
import  { useState } from 'react';



export  function PermanentDrawerLeft({txt, search, filter,  products }) {
  const [ texto, setText ] = useState([])
  const history = useHistory()
  // console.log(filter)

  var { filters, available_filters } = products

  function changeText(e) {
            
    if( filters.length > 0) {
      var textoAux = [];
      for (let i = 0; i < filters.length; i++) {
          console.log(textoAux.length === 0);
          if (textoAux.length === 0 && filters[i].id !== e.target.value){
            textoAux.push(`${filters[i].id}=${filters[i].values[0].id}`)
          }else if(filters[i].id !== e.target.value){
            textoAux.push(`&${filters[i].id}=${filters[i].values[0].id}`)
          }
          console.log(textoAux);
        }
        history.push(`/${txt}/${search}/filter=${textoAux}/0`);
    } 

    // console.log(texto);
  }
  return (
    
    <div className={style.Contenedor}>
      {!filters ? null : 
        filters.map((item, i)=> {
          return (
            <div key={`${item.id}${i}`}>
              <span style={{fontSize: "bold black 2px"}}>{item.name}: </span>
              <span>{item.values[0].name}</span>
              <button onClick={changeText} value={item.id}> X </button>
            </div>
  
          )
        })
      }

      
        
        {/* <h3>Buscar por Condición</h3>
            {condition.map((text, index) => {
              return (
                <Link to={`/${txt}/${search}/condition=${text.id}/0`} className={style.listarCategorias} >
                  <label className={style.list}>{text.name}</label>      
                </Link> 
              )
            })} */}


        {/* </div> */}
        
        {available_filters.map((text, index) => (
          <CategoriesList filterValues={text} type={txt} products={products}/>

          ))}
        
      {/* </div> */}
    </div>
  )

}