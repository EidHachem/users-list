import { useState } from 'react'
import './App.css'
import AddUsers from './components/Form/AddUsers'

import UsersList from './components/List/UsersList'

function App() {

  const [users, setUsers] = useState([])

  const updateUsersList = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers]
    })
  }

  return (
    <div>
    <AddUsers addUser={updateUsersList} />
    { users.length && <UsersList users={users} />}
    </div>
  )
}

export default App
