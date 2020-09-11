import React from 'react'
import moment from 'moment'
export default () => {
  const nextMeetup = moment().startOf('week').add(2,'days') // thursday - change number to whatever day of week wanted
  const nextMeetupDay = nextMeetup.format('dddd') // this weeks meetup dat int
  const nextMeetupDate = nextMeetup.format('LL').slice(0, -6) // this weeks meetup formatted for day and year
  const currentTime = moment()._d // full date of current time
  const currentTimeDayInt = `${currentTime}`.slice(8, 10) // current time day int
  const currentTimeHourInt = `${currentTime}`.slice(15, 24) // current time hour int
  const nextMeetupDateFull = nextMeetup.format('MMMM Do YYYY, h:mm:ss a') // this weeks meetup down to the seconds
  const nextMeetupDayInt = nextMeetupDateFull.slice(-22, -20) // next weeks meetup day int
  const daysToAdd =  7 - (parseInt(currentTimeDayInt - nextMeetupDayInt)) // how many days from now the upcoming weeks meetup will be
  const upcomingWeeksMeetup = moment().add(daysToAdd, 'days').format('LL') // upcomingweeks meetup
  const handleRenderingNextDate = () => {
    if (currentTimeDayInt > nextMeetupDayInt) {
      return upcomingWeeksMeetup.slice(0, -6)
    } else if (currentTimeHourInt > "20:00:00") {
      return upcomingWeeksMeetup.slice(0, -6)
    } else {
      return nextMeetupDate
    }
  }
  return (
    <div className="upcoming-events-wrapper shader" id="Events">
      <div className="upcoming-events-container">
        <div className="upcoming-events-header">
          <h1>Upcoming Events</h1>
        </div>
        <div className="upcoming-events-date-wrapper">
          <div className="date-top">
            {nextMeetupDay.toString()}
          </div>
          <div className="date-bottom-wrapper">
            <div>
              {handleRenderingNextDate()}
            </div>
            <div style={{ paddingTop: "1rem" }}>6:00 PM MST</div>
          </div>
        </div>
      </div>
    </div>
  )
}