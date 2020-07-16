import React, { useState } from 'react'

export default () => {
  const [ name, setName ] = useState("")
  const [ names, setNames ] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    var state = [...names]
    state.push(name)
    setNames(state)
    setName("")
  }

  return (
    <div>
      <div>
        {
          names.map((name, idx) => {
            return (
              <div key={idx}>
                {name}
              </div>
            )
          })
        }
      </div>

      <div>
        <div>
          <input 
            placeholder="Add a name!"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <button onClick={handleClick}>
            Add
          </button>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}