import React, {useEffect, useState} from "react";
import FilterCheckboxs from "../Components/FilterCheckboxs";
export default function CategoriesList({filterValues}) {
    const [values] =useState(filterValues.values)
    // console.log(values)
    return (
        <div>
            <h5>{filterValues.name}</h5>
            {values.map(cat => { 
                // <h6>{cat.name}</h6>
                return (
                    <FilterCheckboxs 
                        name= {cat.name}
                        id= {cat.id}
                        key= {cat.id}
                        results= {cat.results}
                    />

                )
            //     <label>
            //     <input type="checkbox" id={cat.id} value={cat.id}/> {cat.name}
            // </label>
             })} 
        </div>
    )
}