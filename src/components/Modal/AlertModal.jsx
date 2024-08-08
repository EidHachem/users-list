import ReactDom from "react-dom"
import styles from "./AlertModal.module.css"

const AlertModal = ({ type, message, closeModal }) => {
  const closeModalHandler = () => {
    closeModal()
  }

  const stopPropagationHandler = (event) => {
    event.stopPropagation()
  }

  return (
    <>
      {ReactDom.createPortal(
        <div className={styles.overlay} onClick={closeModalHandler}>
          <div className={styles.modal} onClick={stopPropagationHandler}>
            <div className={styles["modal-header"]}>
              <h4 className={styles["modal-title"]}>{type}</h4>
            </div>
            <div className={styles["modal-content"]}>
              <p>{message}</p>
              <button className={styles.btn} onClick={closeModalHandler}>
                OK
              </button>
            </div>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  )
}

export default AlertModal
