import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    // useEffect déclenché à chaque rendu
    useEffect(() => {
        console.log('Le composant a été rendu !', );
    }, []);

    return (
        <div>
            <h1>Compteur : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default Counter;
