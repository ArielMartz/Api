import React, { useState } from "react";
import { searchPokemon } from "../../api";

const Searchbar = () => {
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);

    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        console.log(data)
    }

    return(
        <div>
            <div>
                <input type="text" placeholder="Buscar pokemon" onChange={onChange}/>
            </div>
            <button onClick={onClick}>Buscar</button>
        </div>
    )
}

export default Searchbar;