import React from "react"
import styles from "./UsersList.module.css"
import Card from "../UI/Card"

const UsersList = ({ users }) => {
  return (
    <Card>
      {users.map((user) => {
        return (
          <div key={user.id} className={styles.user}>
            {user.name} ({user.age} years old)
          </div>
        )
      })}
    </Card>
  )
}

export default UsersList
