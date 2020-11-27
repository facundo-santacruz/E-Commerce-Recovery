import React, {useEffect, useState} from "react";
import FilterCheckboxs from "../Components/FilterCheckboxs";
export default function CategoriesList({filterValues, type, search}) {
    const [values] =useState(filterValues.values)
    // console.log(values)
    return (
        <div>
            <h3>{filterValues.name}</h3>
            {values.map(cat => { 
                return (
                    <FilterCheckboxs 
                        name= {cat.name}
                        id= {cat.id}
                        key= {cat.id}
                        results= {cat.results}
                        filter={filterValues.id}
                        type={type}
                        search={search}
                    />

                )
             })} 
        </div>
    )
}