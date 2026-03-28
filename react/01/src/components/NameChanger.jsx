import React from 'react'
import { useState, useEffect } from 'react'

function NameChanger () {
    const [name, setName] = useState("Zoha");

    useEffect(() => {
    console.log("Run Everytime"); 
    })

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Name: {name} </h1>
            <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={ () => setName("Usman")}>Change name to Usman</button>
            <button  className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={ () => setName("Zoiii")}>Change Name to Zoiii</button>
        </div>
    )
}

export default NameChanger