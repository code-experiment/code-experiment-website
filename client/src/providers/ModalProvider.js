import React, { useState } from 'react'
import ModalContext from '../contexts/ModalContext'

const ModalProvider = (props) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ modalHeadingText, setModalHeadingText ] = useState(false)
  const [ modalContentText, setModalContentText ] = useState(false)

  const state = {
    modalIsOpen,
    setModalIsOpen,
    modalHeadingText,
    setModalHeadingText,
    modalContentText,
    setModalContentText
  }
  
  return (
    <ModalContext.Provider value={state}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;