import React from 'react';

export default (props) => {
  const { handleClick } = props
  return (
    <>
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
    </>
  )
}