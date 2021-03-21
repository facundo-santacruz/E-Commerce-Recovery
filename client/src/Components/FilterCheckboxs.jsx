import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import  style  from "./../Styles/Components/Filter.module.css";
export default function FilterCheckboxs({id, name, type, filter, filters, results,search}) {
    // console.log(results)
    const [ text, setText] = useState("")
    let history = useHistory();
    useEffect(() => {
        function changeText() {
            console.log(filters.length);
            if( filters.length > 0) {
                const textoAux = filters.map((filtro, i) => {
                   return i===0 ? `${filtro.id}=${filtro.values[0].id}` : `&${filtro.id}=${filtro.values[0].id}`
                })
                // console.log(textoAux);
                setText(textoAux.join("").replace(",", ""))
            }
        }
        changeText()
    }, [filters.values])
    
    if(text){
        return (
            <Link to={`/${type}/${search}/filter=${text}&${filter}=${id}/1`} className={style.contenedor} key={id}>
                <label   className={style.nombre}>
                    {/* <input type="checkbox" id={id} value={id}/>  */}
                    {name} 
                </label>
                <label style={{color:"gray"}}> ({results})</label>
            </Link>
    )

    }else{
        return (
            <Link to={`/${type}/${search}/filter=${filter}=${id}/1`} className={style.contenedor} key={id}>
                <label   className={style.nombre}>
                    {/* <input type="checkbox" id={id} value={id}/>  */}
                    {name} 
                </label>
                <label style={{color:"gray"}}> ({results})</label>
            </Link>
    )
    }
}