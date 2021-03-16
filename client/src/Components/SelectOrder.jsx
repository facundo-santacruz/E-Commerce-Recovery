import React from 'react';
import CategoriesList from '../Containers/CategoriesList'
// import { bindActionCreators } from 'redux';
import  style  from "../Styles/Components/LeftBar.module.css";
import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useState } from 'react';



export  function SelectOrder({products, txt, condition}) {
    const [ list ] = useState([{name: "Más relevantes", id:"relevant"}, 
                            {name: "Menor Precio", id:"price_asc"}, {name: "Mayor Precio", id:"price_desc"}])
    const [ value, setValue] = useState(products.sort)
    let history = useHistory();
    var { query } = products

     function handleClick(event) {
        // condition += `&sort=${e.target.value}`
        // console.log(condition);
        // if (e.target.value !== value.id){
            console.log(event.target.value);
            var newArr =  condition.split("&").findIndex(elem => elem.slice(0,4) === "sort" )
            // console.log(e)
            var other = newArr === -1 ? `${condition}&sort=${event.target.value}` :
                condition.split("&").map(elem => elem.slice(0,4) === "sort" ? 
                    `sort=${event.target.value}` : elem).join("&")

            console.log(other);
            return  history.push(`/${txt}/${query}/filter=${other}/0`);
        }
    
    
    return (
        <div >
            <span> Ordenar por </span>
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