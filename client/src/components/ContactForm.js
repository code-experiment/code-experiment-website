import React, { useState } from "react";

import '../styles/ContactForm.css'
import api from "../helpers/api";

// Items we need for axios call
// subject: req.body.subject,
// text: `
//   from: ${req.body.name} 
//   contact: ${req.body.email}
//   message: ${req.body.text}

export default () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ question, setQuestion ] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, email, question)
    api.post('/', {
      "subject": question.slice(0, 10),
      "name": name,
      "email": email,
      "text": question
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <input
        placeholder="name"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
        className="contact-form--input"
        />

      <input
        placeholder="email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        className="contact-form--input"
        />

      <textarea 
        placeholder="question"
        type="textarea"
        onChange={(event) => setQuestion(event.target.value)}
        value={question}
        className="contact-form--input"
      />
      <button type="submit" className="contact-form-btn">Submit</button>
    </form>
  );
}