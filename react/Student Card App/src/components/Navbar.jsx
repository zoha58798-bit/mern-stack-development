import React from 'react'
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav style={{ background: '#333', padding: '10px' }}>
            <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
            <Link to="/students" style={{ color: 'white' }}>Students</Link>
        </nav>
    )
}

export default Navbar