import React from "react";

import { NavLink } from 'react-router-dom';
export default function FilterCheckboxs({id, name, filter, results, search}) {
    
    return (
        <NavLink to={`/categorie/${search}/${filter}/${id}/${0}`}style={{textDecoration:"none"}}>
            <label style={{  fontSize: "smaller"}}>
                {name}  
            </label>
            <label>{results}</label>
        </NavLink>
    )
}