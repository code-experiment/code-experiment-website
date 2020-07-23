import React, { useState } from 'react'
import ModalContext from '../contexts/ModalContext'

export default (props) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ headingText, setHeadingText ] = useState(false)
  const [ contentText, setContentText ] = useState(false)

  const state = {
    modalIsOpen,
    setModalIsOpen,
    headingText,
    setHeadingText,
    contentText,
    setContentText
  }
  
  return (
    <ModalContext.Provider value={state}>
      {props.children}
    </ModalContext.Provider>
  )
}