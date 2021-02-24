import React, {useEffect} from "react";

import { Link, NavLink } from 'react-router-dom';
export default function FilterCheckboxs({id, name, filter, type, results, type,search}) {
    
    return (
        <div>
            <NavLink to={`/categorie/${search}/${filter}/${id}/${0}`}>
                <label style={{     textUnderlinePosition: "under",  fontSize: "smaller"}}>
                    {/* <input type="checkbox" id={id} value={id}/>  */}
                    {name} ({results})
                </label>
            </NavLink>
        </div>
    )
}