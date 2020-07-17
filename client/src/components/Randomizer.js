import React, { useState } from 'react'

import '../styles/Randomizer.scss'

export default () => {
  const [ name, setName ] = useState("")
  const [ names, setNames ] = useState([])
  const [ results, setResults ] = useState([])

  const handleClick = (e) => {
    e.preventDefault()

    if (name !== "") {
      var splitNames = name.split(',')
      var state = [...names]
  
      splitNames.map((name) => {
        state.push(name.trim())
      })
  
      setNames(state)
      setName("")
    }
  }

  const handleRandomizeClick = (e, names) => {
    e.preventDefault()
    var newNames = names.sort(() => Math.random() - 0.5)
    newNames.reduce(function(result, value, index, array) {
      if (index % 2 === 0)
        if (array.slice(index, index + 2).length === 1) {
          result[result.length - 1].push(array.slice(index, index + 2))
        } else {
          result.push(array.slice(index, index + 2));
        }
      setResults(result)
      return result
    }, []);
  }

  return (
    <div className="randomizer-container">
      <div>
        <div className="randomizer-names-heading">
          Names
        </div>

        <div className="randomizer-names-container">
          {
            names.map((name, idx) => {
              return (
                <div className="randomizer-names-wrapper" key={idx}>
                  <div className="randomizer-names-name">
                    {name} 
                  </div> 
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="randomizer-form-container">
        <div className="randomizer-input-wrapper">
          <input 
            placeholder="Add name/names"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="randomizer-input"
          />
        </div>

        <div className="randomizer-form-spacing" />

        <div className="randomizer-btns-container">
          <div className="randomizer-btn-wrapper">
            <button className="randomizer-btn" onClick={handleClick}>
              Add
            </button>
          </div>

          <div className="randomizer-btn-wrapper">
            <button className="randomizer-btn" onClick={(e) => handleRandomizeClick(e, names)}>
              Randomize
            </button>
          </div>
        </div>
      </div>

      <div className="randomizer-results-container">
        <div>
          <div className="randomizer-results-heading">
            Results
          </div>

          <div className="randomizer-results-wrapper">
            {
              results.map((pair, idx) => {
                return (
                  <div className="randomizer-results-pair-wrapper" key={`pair-group-${idx}`}>
                    <div className="randomizer-results-pair-heading">
                      Group {idx + 1}
                    </div>

                    <div>
                      {
                        pair.map((name, idx) => {
                          return (
                            <div className="randomizer-results-pair-text" key={`pair-group-name-${idx}`}>
                              {
                                idx === 0 ? (
                                  <div className="randomizer-results-assigned-task">
                                    Driver
                                  </div>
                                ) : (
                                  <div className="randomizer-results-assigned-task">
                                    Navigator
                                  </div>
                                )
                              }

                              {name}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}