export function Modal({ message, idn }) {

  const closeModal = () => {
    const dialog = document.querySelector(`.modal-${idn}`)

    dialog.close()
  } 

  return (
    <div className="modal-container">
      <dialog className={`modal-${idn}`}>
        <h4>{message}</h4>
        <button className="close-modal" onClick={closeModal}>
          Cerrar
        </button>
      </dialog>
    </div>
  )
}