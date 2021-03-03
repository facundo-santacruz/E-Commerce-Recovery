import React, {useEffect} from "react";

import { Link, NavLink } from 'react-router-dom';
import  style  from "./../Styles/Components/Filter.module.css";
export default function FilterCheckboxs({id, name, filter,  results,search}) {
    
    return (
        <NavLink to={`/products/${search}/${filter}/${id}/${0}`} className={style.contenedor} key={id}>
            <label className={style.nombre}>
                {/* <input type="checkbox" id={id} value={id}/>  */}
                {name} 
            </label>
            <label style={{color:"gray"}}> ({results})</label>
        </NavLink>
    )
}