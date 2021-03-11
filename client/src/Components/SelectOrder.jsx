import React from 'react';
import CategoriesList from '../Containers/CategoriesList'
// import { bindActionCreators } from 'redux';
import  style  from "../Styles/Components/LeftBar.module.css";
import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useState } from 'react';



export  function SelectOrder({products, txt, func}) {
    const [ list ] = useState([{name: "Más relevantes", id:"relevant"}, 
                            {name: "Menor Precio", id:"price_asc"}, {name: "Mayor Precio", id:"price_desc"}])
    const [ value, setValue] = useState(products.sort)
    let history = useHistory();
    var { query } = products

    function handleClick(e) {
        history.push(`/${txt}/${query}/order=${e.target.value}/0`);
    }
    // console.lo
    console.log(value)
    return (
        <div >
            <span> Ordenar por </span>
            <select onSelect={value.name} onChange={handleClick}>
                {list.map(items => {
                    return (
                        <option  value={(items.id)}>{items.name}
                             </option>
                    )
                })}
            </select>
        </div> 
  )
}     