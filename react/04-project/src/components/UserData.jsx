import React from 'react'
import { useState, useEffect} from 'react'

function UserData () {
    const [user, setUser] = useState(null);

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then (res => res.json())
        .then (data => setUser(data))
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>City: {user.address.city}</p>
                </div>
                ) : (
                    <p>Loading... ⏳</p>
                )
            }
        </div>
    );
}

export default UserData