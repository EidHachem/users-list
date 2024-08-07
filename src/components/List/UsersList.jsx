import React from "react"
import styles from './UsersList.module.css'

const UsersList = ({ users }) => {
  return (
    <ul className={styles.users}>
      {users.map((user) => {
        return (
          <li key={user.id} className={styles.user}>
            {user.name} ({user.age} years old)
          </li>
        )
      })}
    </ul>
  )
}

export default UsersList
