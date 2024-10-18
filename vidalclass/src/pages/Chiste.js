import React, { useState } from 'react';
function Chiste(){
    const [jokeSetup, setJokeSetup] = useState('')
    const [jokeDelivery, setJokeDelivery] = useState('')
    
    
    function yahir(){
    
        fetch(`https://v2.jokeapi.dev/joke/Any`)
            .then(response => response.json())
            .then(data => {
                setJokeSetup(data.setup);
                setJokeDelivery(data.delivery);
                if(data.setup===undefined){
                    setJokeSetup(data.joke);
                }
            })
            .catch(error => {
                console.error('Error fetching the joke:', error);
                alert("Chiste sin chiste");
            });
    }
    return (
        <div>
            <header>
                <h1>Dejame te cuento un chiste</h1>
            </header>
    
            <main>
                <div className="search-container">
                    <button onClick={yahir}>Chiste</button>
                </div>
                <div id='hola'>
                    <p>{jokeSetup}</p>  
                    <p>{jokeDelivery}</p>
                </div>
            </main>
        </div>
    );
}

export default Chiste;

