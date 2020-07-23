import React, { useContext } from 'react'
import ModalContext from '../contexts/ModalContext'


export default () => {
  const {
    modalIsOpen,
    setModalIsOpen,
    headingText,
    setHeadingText,
    contentText,
    setContentText
  } = useContext(ModalContext)

  if (!modalIsOpen) {
    return <div />
  }

  const handleClick = (e) => {
    e.preventDefault();
    setHeadingText(false)
    setContentText("")
    setModalIsOpen(false)
  }

  return (
    <div className="modal-container">
      <div className="modal-content-wrapper">
        <div className="modal-heading-text">
          { headingText ? headingText : "Alert" }
        </div>

        <div className="modal-main-content-wrapper">
          <div className="modal-main-content">
              { contentText }
          </div>

          <button className="modal-main-content-btn" onClick={handleClick}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}