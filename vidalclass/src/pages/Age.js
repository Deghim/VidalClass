import React, { useState } from 'react';

function Age() {
    const [nombre, setNombre] = useState('');
    const [edadsita, setEdadsita] = useState('');
    const [resultadoNombre, setResultadoNombre] = useState('');
    const [resultadoEdad, setResultadoEdad] = useState('');

    function oscar() {
        if (nombre !== "" && edadsita !== "") {
            fetch(`https://api.agify.io?name=${nombre}`)
                .then(response => response.json())
                .then(data => {

                    setResultadoEdad(data.age);
                    setResultadoNombre(nombre);

                    if (parseInt(resultadoEdad) === parseInt(edadsita)) {
                        alert("¡Ganaste perrillo!!!!!");
                    } else {
                        alert("Perdiste...");
                    }

                    setNombre('');
                    setEdadsita('');
                })
                .catch(error => {
                    console.error('Error al obtener los datos:', error);
                    alert("Error en la consulta a la API.");
                });
        } else {
            alert("Por favor, rellena ambos campos.");
        }
    }

    return (
        <div>
            <header>
                <h1>Adivina la edad de...</h1>
            </header>

            <main>
                <div className="search-container">
                    <input
                        className="search-box"
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                    <input
                        className="search-box"
                        type="text"
                        placeholder="Edad??"
                        value={edadsita}
                        onChange={(e) => setEdadsita(e.target.value)} 
                    />
                </div>
                <button onClick={oscar}>Comprobar</button>
                <div id='hola'>
                    <p>Nombre: {resultadoNombre}</p>
                    <p>Edad estimada: {resultadoEdad}</p>
                </div>
            </main>
        </div>
    );
}

export default Age;