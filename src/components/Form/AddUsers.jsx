import { useState, useRef } from "react"
import Button from "../UI/Button"
import { v4 as uuidv4 } from "uuid"
import AlertModal from "../Modal/AlertModal"

import styles from "./AddUsesrs.module.css"
import Card from "../UI/Card"

const AddUsers = ({ addUser }) => {
  const [showModel, setShowModel] = useState(false)
  const [emptyField, setEmptyField] = useState(false)
  const [negativeAge, setNegativeAge] = useState(false)

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const addNewUserHandler = (e) => {
    e.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (enteredName.trim().length <= 0) {
      setEmptyField(true)
      setShowModel(true)
      return
    }

    if (enteredAge.trim().length <= 0) {
      setEmptyField(true)
      setShowModel(true)
      return
    }

    if (+enteredAge <= 0) {
      setEmptyField(false)
      setNegativeAge(true)
      setShowModel(true)
      ageInputRef.current.value = ""
      return
    }

    const user = {
      id: uuidv4(),
      name: enteredName,
      age: enteredAge,
    }

    addUser(user)
    nameInputRef.current.value = "" // Just to use ref instead of state
    ageInputRef.current.value = ""
    setEmptyField(false)
    setNegativeAge(false)
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={addNewUserHandler}>
        <label htmlFor="name" className={styles.label}>
          Username
        </label>
        <input
          id="name"
          ref={nameInputRef}
          className={styles.input}
          type="text"
          placeholder="Enter username"
        />
        <br />
        <label htmlFor="age" className={styles.label}>
          Age
        </label>
        <input
          id="age"
          ref={ageInputRef}
          className={styles.input}
          type="number"
          placeholder="Enter user age"
        />
        <Button name="Add User" />
      </form>
      {showModel && (
        <AlertModal
          type="Invalid input"
          message={
            emptyField
              ? "Please enter valid name and age (non-empty values)"
              : negativeAge
              ? "Please enter a positive age"
              : ""
          }
          closeModal={() => setShowModel(false)}
        />
      )}
    </Card>
  )
}

export default AddUsers
