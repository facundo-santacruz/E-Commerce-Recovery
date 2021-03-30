import React from "react";
import FilterCheckboxs from "../Components/FilterCheckboxsCategorie";
export default function CategoriesList({products, type, filterValues}) {
    // console.log(values)
    var { query, filters } = products
    
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <h3>{filterValues.name}</h3>
            {filterValues.values.map(cat => { 
                return (
                    <FilterCheckboxs 
                        name= {cat.name}
                        id= {cat.id}
                        key= {cat.id}
                        results= {cat.results}
                        filter={filterValues.id}
                        type={type}
                        search={query}
                        filters={filters}
                    />

                )
             })} 
        </div>
    )
}