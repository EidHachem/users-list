import React from "react"
import styles from "./AlertModal.module.css"

const AlertModal = ({ type, message, closeModal }) => {

    const closeModalHandler = () => {
        closeModal()
    }

    const stopPropagationHandler = (event) => {
        event.stopPropagation();
    };

  return (
    <div className={styles.overlay} onClick={closeModalHandler}>
      <div className={styles.modal} onClick={stopPropagationHandler}>
        <div className={styles['modal-header']}>
          <h4 className={styles['modal-title']}>{type}</h4>
        </div>
        <div className={styles['modal-content']}>
        <p>{message}</p>
        <button className={styles.btn} onClick={closeModalHandler}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default AlertModal
