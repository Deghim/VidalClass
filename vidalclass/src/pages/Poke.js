import React, { useState } from 'react';

function Poke() {
    const [pokeNombre, setPokeNombre] = useState('');
    const [pokemonImageUrl, setPokemonImageUrl] = useState('');

    const oscar = () => {
        const juan = Math.floor(Math.random() * 1010) + 1; 
        console.log(juan);

        fetch(`https://pokeapi.co/api/v2/pokemon/${juan}`)
            .then(response => response.json())
            .then(data => {
                setPokeNombre(data.name);  
                setPokemonImageUrl(data.sprites.front_default);
            })
            .catch(error => {
                console.error('Error:', error);
                alert("pokemon muerto")
            });
    };

    return (
        <div>
            <header>
                <h1>Busca tu Pokémon</h1>
            </header>
    
            <main>
                <div className="search-container">
                    <button onClick={oscar}>Pokemon</button> 
                </div>
                <div id="hola">
                    <img src={pokemonImageUrl} alt={pokeNombre} />  
                    <p>{pokeNombre}</p>  
                </div>
            </main>
      </div>
    );
}

export default Poke;