import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsers() {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();

  }, []);

  return (
    <>
      <div className='users'>
        <h1>Users</h1>

        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}

      </div>
    </>
  )
}

export default App