export function Modal() {

  const closeModal = () => {
    const dialog = document.querySelector('.modal')

    dialog.close()
  } 

  return (
    <div className="modal-container">
      <dialog className="modal">
        <h4> Missing name of topic</h4>
        <button className="close-modal" onClick={closeModal}>
          Cerrar
        </button>
      </dialog>
    </div>
  )
}