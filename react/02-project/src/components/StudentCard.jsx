import React from 'react'

const StudentCard = ( {name, subject, marks}) => {
  return (
    <div>
        <h1>Name: {name} </h1>
        <p>Subject: {subject} </p>
        <p>Marks: {marks}</p>
    </div>
  );
}

export default StudentCard