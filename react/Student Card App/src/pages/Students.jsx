import { useState, useEffect } from 'react';
import StudentCard from '../components/StudentCard';

function Students () {
    const [students, setStudents] = useState([
        { id: 1, name: 'Ali', subject: 'Math', marks: 85 },
        { id: 2, name: 'Fatima', subject: 'Science', marks: 72 },
        { id: 3, name: 'Ahmed', subject: 'English', marks: 55 },
    ]);

    const [search, setSearch] = useState('');

    useEffect ( () => {
        document.title = `${students.length} Students`;
    }, [students]);

    const filterdStudents = students.filter( s => 
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Students List</h1>

            <input
            type="text"
            placeholder="Student dhundo..."
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '8px', marginBottom: '20px', width: '200px' }}
            />

            {filterdStudents.map(student => (
            <StudentCard
            key={student.id}
            name={student.naam}
            subject={student.subject}
            marks={student.marks}
            />
            ))}
        </div>
    );
}

export default Students