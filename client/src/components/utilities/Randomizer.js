import React, { useState, useContext } from 'react'
import ModalContext from '../../contexts/ModalContext'

export default () => {
  const [ name, setName ] = useState("")
  const [ names, setNames ] = useState([])
  const [ results, setResults ] = useState([])
  const {
    setModalContentText,
    setModalIsOpen
  } = useContext(ModalContext)

  const handleAddClick = (e) => {
    e.preventDefault()

    if (name !== "") {
      const splitNames = name.split(',')
      const state = [...names]
  
      splitNames.map((name) => state.push(name.trim()))
  
      setNames(state)
      setName("")
    }
  }

  const handleRandomizeClick = () => {
    if (names.length > 1) {
      let newNames = names.sort(() => Math.random() - 0.5)
      newNames.reduce(function(result, _, index, array) {
        if (index % 2 === 0)
          if (array.slice(index, index + 2).length === 1) {
            result[result.length - 1].push(array.slice(index, index + 2))
          } else {
            result.push(array.slice(index, index + 2));
          }
        setResults(result)
        return result
      }, []);
    } else {
      setModalContentText('You need more than one person to randomize.')
      setModalIsOpen(true)
    }
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

      <form className="randomizer-form-container" onClick={handleAddClick}>
        <div className="randomizer-input-wrapper">
          <input 
            placeholder="Add name/names"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="randomizer-input"
          />
        </div>

        <div className="randomizer-btns-container">
          <div className="randomizer-btn-wrapper">
            <button className="randomizer-btn" type="submit">
              Add
            </button>
          </div>

          <div className="randomizer-btn-wrapper">
            <button type="button" className="randomizer-btn" onClick={handleRandomizeClick}>
              Randomize
            </button>
          </div>
        </div>
      </form>

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