import React, { useState } from "react";


const Searchbar = () => {
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);

    }

    return(
        <div>
            <div>
                <input type="text" placeholder="Buscar pokemon" onChange={onChange}/>
            </div>
            <div>{search}</div>
        </div>
    )
}

export default Searchbar;