import React from 'react'

export default () => {
  const handleClick = (id) => {
    var elmnt = document.getElementById(id)
    
    if (id === 'about' || id ===  "contact-form-id") {
      elmnt.scrollIntoView({ behavior: 'smooth', block: "start" })
    } else { 
      elmnt.scrollIntoView({ behavior: 'smooth', block: "start" })
    }
  }

  return (
    <div className="nav-bar-wrapper">
      <div className="container nav-bar-container">
        <div className="logo-container" onClick={() => handleClick("about")}>
          Code Expirement
        </div>

        <nav className="links-outer-wrapper">
          <div className="links-inner-wrapper">
            <div className="link-wrapper">
              <button onClick={() => handleClick("about")} className="link">About</button>
            </div>

            <div className="link-wrapper">
              <button onClick={() => handleClick("upcoming-events")} className="link">Events</button>
            </div>
            
            <div className="link-wrapper">
              <button onClick={() => handleClick("slack")} className="link">Slack</button>
            </div>

            <div className="link-wrapper">
              <button onClick={() => handleClick("contact-form-id")} className="link">Contact</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}