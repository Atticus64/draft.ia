import { useEffect } from 'react'
import '../css/Modal.css'

export function Modal({ message, idn, width, height }) {

  const closeModal = () => {
    const dialog = document.querySelector(`.modal-${idn}`)

    dialog.close()
  } 
  let count = 0

  useEffect(() => {
    const dialog = document.querySelector(`.modal-${idn}`)

    const handleClick = (event) => {

      const id = event.target.id
      if ( id === "dialog-box"){
        dialog.close()
      }

    }

    window.addEventListener('click', handleClick) 

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="modal-container" id="container-box">
      <dialog className={`modal-${idn} ${width} ${height}`} id="dialog-box">
        <div className='flex flex-col align-middle'>
          <h4 className='text-xl m-4'>{message}</h4>
          <button className="close-modal border border-amber-200 hover:bg-amber-500 rounded-md transition-all" onClick={closeModal}>
            Cerrar
          </button>
        </div>
      </dialog>
    </div>
  )
}