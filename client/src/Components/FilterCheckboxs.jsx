import React, {useEffect} from "react";

import { Link, NavLink } from 'react-router-dom';
import  style  from "./../Styles/Components/Filter.module.css";
export default function FilterCheckboxs({id, name, filter,  results,search}) {
    
    return (
        <div className={style.contenedor}>
            <NavLink to={`/products/${search}/${filter}/${id}/${0}`} className={style.link} >
                <label className={style.nombre}>
                    {/* <input type="checkbox" id={id} value={id}/>  */}
                    {name} ({results})
                </label>
            </NavLink>
        </div>
    )
}