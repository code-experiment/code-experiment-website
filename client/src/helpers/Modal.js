import React from 'react'

export default (props) => {
  return (
    <div className="modal-container">
      <div className="modal-content-wrapper">
        <div className="modal-heading-text">
          { props.headingText ? props.headingText : "Alert" }
        </div>

        <div className="modal-main-content-wrapper">
          <div className="modal-main-content">
              { props.contentText }
          </div>

          <button className="modal-main-content-btn">
            OK
          </button>
        </div>
      </div>
    </div>
  )
}