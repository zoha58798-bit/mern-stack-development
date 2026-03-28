import React from 'react'
import { useEffect, useState } from "react";

function Reload () {
    useEffect(() => {
    console.log("Reload Done"); 
  }, [])

  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}

export default Reload