import React, { useState } from 'react'

export default () => {
  const [ name, setName ] = useState("")
  const [ names, setNames ] = useState([])
  const [ result, setResult ] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    var state = [...names]
    state.push(name)
    setNames(state)
    setName("")
  }

  console.log(result)

  const handleRandomizeClick = (e, names) => {
    e.preventDefault()
    // console.log(names, e)
    var newNames = names.sort(() => Math.random() - 0.5)
    newNames.reduce(function(result, value, index, array) {
      if (index % 2 === 0)
        result.push(array.slice(index, index + 2));
      setResult(result)
      return result
    }, []);
  }

  return (
    <div style={{ width: "100%" }}>
      {
        names.length > 0 ? (
          <div>
            <div style={{ paddingTop: "10px", paddingBottom: "10px", textAlign: "center" }}>
              Names
            </div>

            <div style={{ width: "100%", backgroundColor: "#f8f8ff", minHeight: "100px", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 6px 1px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridAutoRows: "minmax(100px, auto)", paddingBottom: 20, border: "2px solid #22223b", flexWrap: "wrap" }}>
              {
                names.map((name, idx) => {
                  return (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div key={idx} style={{ paddingTop: 50, paddingLeft: 20, paddingRight: 20, textAlign: "center", minWidth: "20px", height: "100%", overflowWrap: "break-word" }}>
                        {name} 
                      </div> 
                    </div>
                  )
                })
              }
            </div>
          </div>
        ) : (
          <div />
        )
      }

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2em" }}>
        <div style={{ width: "60%" }}>
          <input 
            placeholder="Add a name!"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "1em", border: "2px solid #22223b", outline: "none", borderRadius: ".25em" }}
          />
        </div>

        <div style={{ width: "10%" }} />

        <div style={{ width: "30%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ width: "45%" }}>
            <button onClick={handleClick} style={{ backgroundColor: "#22223b", color: "#F88E00", borderRadius: ".25em", cursor: "pointer", outline: "none", width: "100%", padding: "1em", border: "1px solid transparent" }}>
              Add
            </button>
          </div>

          <div style={{ width: "45%" }}>
            <button onClick={(e) => handleRandomizeClick(e, names)} style={{ backgroundColor: "#22223b", color: "#F88E00", borderRadius: ".25em", cursor: "pointer", outline: "none", width: "100%", padding: "1em", border: "1px solid transparent" }}>
              Randomize
            </button>
          </div>
        </div>
      </div>

      <div>
        result
      </div>
    </div>
  )
}