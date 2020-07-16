import React from 'react'
import moment from 'moment'

export default () => {
  const nextMeetup = moment().startOf('week').add(4,'days') // thursday - change number to whatever day of week wanted
  const nextMeetupDay = nextMeetup.format('dddd')
  const nextMeetupDate = nextMeetup.format('LL').slice(0, -6)

  return (
    <div id="upcoming-events">
      <div className="event-header">
        <h1>Upcoming Event</h1>
      </div>

      <div className="event-date-container">
        <div className="top-date">
          {nextMeetupDay.toString()}
        </div>

        <div className="bottom-date-container">
          <div className="bottom-date">
            {nextMeetupDate}
          </div>
        </div>
      </div>
    </div>
  )
}