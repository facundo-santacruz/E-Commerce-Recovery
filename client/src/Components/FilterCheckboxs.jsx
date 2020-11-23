import React, {useEffect} from "react";

import { Link, NavLink } from 'react-router-dom';
export default function FilterCheckboxs({id, name, results, type,search}) {
    
    return (
        <div>
                <Link to={`/products/${search}/filter${name}=${id}/0`}>
            <label style={{     textUnderlinePosition: "under",  fontSize: "smaller"}}>
                    {/* <input type="checkbox" id={id} value={id}/>  */}
                    {name} ({results})
            </label>
                </Link>
        </div>
    )
}