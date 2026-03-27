import React from 'react'
import { useState } from 'react'

function InputExample () {
    const [text, setText] = useState("");

    return (
        <div>
            <input type="text" placeholder='type something...' onChange={ (e) => setText(e.target.value)}></input>
            <p>Text: {text} </p>
        </div>
    )
}


export default InputExample