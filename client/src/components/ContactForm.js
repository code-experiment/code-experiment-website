import React, { useState } from "react";

export default () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ question, setQuestion ] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, email, question)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />

      <input
        placeholder="email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />

      <textarea 
        placeholder="question"
        type="textarea"
        onChange={(event) => setQuestion(event.target.value)}
        value={question}
      />
      <button type="submit">Submit</button>
    </form>
  );
}