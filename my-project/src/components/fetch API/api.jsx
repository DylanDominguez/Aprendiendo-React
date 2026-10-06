import { useEffect, useState } from 'react';
import './api.css';

function Api() {
    const [users, setUsers] = useState([]);

    const getUsers = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    const HTMLusers = users.map((user) => {
        return (
            <div>
                <h3>{user.name}</h3>
            </div>
        );
    });
    return (
        <div>
            <h1>fetch() | Llamada a una API</h1>
            <section>{HTMLusers}</section>
        </div>
    );
}

export default Api;