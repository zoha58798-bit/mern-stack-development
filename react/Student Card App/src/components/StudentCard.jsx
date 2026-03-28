import React from 'react'

function StudentCard ( {name, subject, marks}) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px',
            width: '200px',
            display: 'inline-block'  
            }}>
            <h3> {name} </h3>
            <p>Subject: {subject}</p>
            <p>Marks: {marks}</p>
            <p>{marks >= 80 ? 'Excellent' : marks >= 60 ? 'Good' : 'Study More' } </p>
        </div>
    );

}

export default StudentCard