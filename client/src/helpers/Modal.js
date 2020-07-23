import React, { useContext } from 'react'
import ModalContext from '../contexts/ModalContext'


export default () => {
  const {
    modalIsOpen,
    setModalIsOpen,
    modalHeadingText,
    setModalHeadingText,
    modalContentText,
    setModalContentText
  } = useContext(ModalContext)

  if (!modalIsOpen) {
    return null
  }

  const handleClick = (e) => {
    e.preventDefault();
    setModalHeadingText(false)
    setModalContentText("")
    setModalIsOpen(false)
  }

  return (
    <div className="modal-container">
      <div className="modal-content-wrapper">
        <div className="modal-heading-text">
          { modalHeadingText ? modalHeadingText : "Alert" }
        </div>

        <div className="modal-main-content-wrapper">
          <div className="modal-main-content">
              { modalContentText }
          </div>

          <button className="modal-main-content-btn" onClick={handleClick}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}