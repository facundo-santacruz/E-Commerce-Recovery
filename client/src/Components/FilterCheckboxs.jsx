import React, {useEffect} from "react";

export default function FilterCheckboxs({id, name, results}) {
    
    console.log(name)
    return (
        <div>
            <label style={{    fontSize: "smaller"}}>
                <input type="checkbox" id={id} value={id}/> {name} ({results})
            </label>
        </div>
    )
}