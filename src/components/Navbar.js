import React from "react";

const Navbar = () => {
    let logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return <nav>
    <div>
        <div>
            <img src={logo} alt="Logo-poke-api" className="navbar-image"/>
        </div>
        <div>❤</div>
    </div>
    
    
    </nav>
}

export default Navbar;