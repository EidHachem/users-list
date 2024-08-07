import React, { useState } from "react"
import Button from "../UI/Button"
import { v4 as uuidv4 } from "uuid"
import AlertModal from "../Modal/AlertModal"

import styles from './AddUsesrs.module.css'
import Card from "../UI/Card"

const AddUsers = ({ addUser }) => {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [showModel, setShowModel] = useState(false)
  const [emptyField, setEmptyField] = useState(false)
  const [negativeAge, setNegativeAge] = useState(false)

  const addNameHAndler = (e) => {
    setUsername(e.target.value)
  }

  const addAgeHAndler = (e) => {
    setAge(e.target.value)
  }

  const addNewUserHandler = (e) => {
    e.preventDefault()

    const user = {
      id: uuidv4(),
      name: username,
      age,
    }

    if (user.name.trim().length <= 0) {
      setEmptyField(true)
      setShowModel(true)
      return
    }

    if (user.age.trim().length <= 0) {
      setEmptyField(true)
      setShowModel(true)
      return
    }

    if (+user.age <= 0) {
        setEmptyField(false)
        setNegativeAge(true)
        setShowModel(true)
        setAge("")
      return
    }

    addUser(user)
    setUsername("")
    setAge("")
    setEmptyField(false)
    setNegativeAge(false)
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={addNewUserHandler}>
        <label className={styles.label}>Username</label>
        <input className={styles.input} type="text" onChange={addNameHAndler} value={username} />
        <br />
        <label className={styles.label}>Age</label>
        <input className={styles.input} type="number" onChange={addAgeHAndler} value={age} />
        <Button name="Add User" />
      </form>
      {showModel && <AlertModal
        type='Invalid input'
        message={
          emptyField
            ? "Please enter valid name and age (non-empty values)"
            : negativeAge
            ? "Please enter a positive age"
            : ""
        }
        closeModal={() => setShowModel(false)}
      />}
    </Card>
  )
}

export default AddUsers
