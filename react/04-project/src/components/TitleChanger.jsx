import React from 'react'
import { useState, useEffect} from 'react'

function TitleChanger () {
    const [count, setCount] = useState(0);

    useEffect ( () => {
        document.title= 'You Change ${count} times title';
    }, [count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={ () => setCount(count+1)}>Click!</button>
        </div>
    );
}

export default TitleChanger