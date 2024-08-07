import { useState } from 'react'
import './App.css'
import AddUsers from './components/Form/AddUsers'

import { v4 as uuidv4 } from 'uuid'
import UsersList from './components/List/UsersList'

const DUMMY_USERS = [
  {
    id: uuidv4(),
    name: 'Eid',
    age: 32
  },
  {
    id: uuidv4(),
    name: 'Elie',
    age: 30
  },
  {
    id: uuidv4(),
    name: 'John',
    age: 31
  },
]

function App() {

  const [users, setUsers] = useState(DUMMY_USERS)

  const updateUsersList = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers]
    })
  }

  return (
    <div>
    <AddUsers addUser={updateUsersList} />
    <UsersList users={users} />
    </div>
  )
}

export default App
