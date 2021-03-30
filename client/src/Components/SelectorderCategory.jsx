import React from 'react';
import  style  from "../Styles/Components/SelectOrder.module.css";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



export  function SelectOrder({products, txt, condition, query}) {
    const [ list ] = useState([{name: "Más relevantes", id:"relevant"}, 
                            {name: "Menor Precio", id:"price_asc"}, {name: "Mayor Precio", id:"price_desc"}])
    const [ value ] = useState(products.sort)
    let history = useHistory();

    function handleClick(event) {
        event.preventDefault()
        if (condition){
            var newArr =  condition.split("&").findIndex(elem => elem.slice(0,4) === "sort" )
            var other = newArr === -1 ? `${condition}&sort=${event.target.value}` :
                condition.split("&").map(elem => elem.slice(0,4) === "sort" ? 
                    `sort=${event.target.value}` : elem).join("&")
            return  history.push(`/${txt}/filter=${other}/1`);
        }else{
            return  history.push(`/${txt}/filter=category=${query}&sort=${event.target.value}/1`);
        }
    }
    
    
    return (
        <div className={style.contenedor}>
            <select defaultValue={value.name} onChange={handleClick}>
                {list.map(items => {
                    return (
                        <option key={`${items.id}`}  value={(items.id)}>{items.name}
                             </option>
                    )
                })}
            </select>
        </div> 
  )
}     