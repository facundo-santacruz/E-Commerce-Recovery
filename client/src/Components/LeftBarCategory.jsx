import React from 'react';
import CategoriesList from '../Containers/CategoriesListCat'
import  style  from "../Styles/Components/LeftBar.module.css";
import { useHistory } from 'react-router-dom';



export  function PermanentDrawerLeft({txt, search, filter,  products }) {
  const history = useHistory()

  var { filters, available_filters } = products

  function changeText(e) {
            
    var textoAux = [];
    for (let i = 0; i < filters.length; i++) {
      if (textoAux.length === 0 && filters[i].id !== e.target.value){
        textoAux.push(`${filters[i].id}=${filters[i].values[0].id.replace(",", "")}`)
      }else if(filters[i].id !== e.target.value){
        textoAux.push(`&${filters[i].id}=${filters[i].values[0].id.replace(",", "")}`)
      }
    }
    history.push(`/${txt}/filter=${textoAux}/1`);
  }
  return (
    
    <div className={style.Contenedor}>
      {filters.length === 1 ? 
        <div key={`${filters[0].id}${0}`}>
          <span>{filters[0].name}: </span>
          <span>{filters[0].values[0].name}</span>
          
        </div>
        : 
        filters.map((item, i)=> {
          
          return (
            <div key={`${item.id}${i}`}className={style.filter}>
              <div>
                <span >{item.name}: </span>
                <span>{item.values[0].name}</span>
              </div>
              {item.name !== "Categorías" ? 
              <button onClick={changeText} value={item.id} className={style.filterBoton}> X </button>
              : null }
            </div>
  
          )
        })
      }
      {available_filters.map((text, index) => (
        <CategoriesList filterValues={text} type={txt} products={products}/>
      ))}
    </div>
  )

}
