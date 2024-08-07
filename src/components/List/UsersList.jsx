import React from "react"
import styles from './UsersList.module.css'
import Card from "../UI/Card"

const UsersList = ({ users }) => {
  return (
    <Card>
      {users.map((user) => {
        return (
          <li key={user.id} className={styles.user}>
            {user.name} ({user.age} years old)
          </li>
        )
      })}
    </Card>
  )
}

export default UsersList
