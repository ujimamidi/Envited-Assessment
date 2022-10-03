import React from "react";
import Cake from '../../images/cake.png'
import Calendar from '../../images/calendar.svg'
import Location from '../../images/location.svg'
import './EventPage.css'

const EventPage = () => {
  const event_details = {
    eventName: "Birthday Bash",
    hostName: "Elysia",
    eventDate: "18 August 6:00PM",
    location: "Street Name"
  }

  return(
    <div className="event-page-container">
      <div className="event-page-container__inner">
        <div className="event-page-containner__inner-details">
          <h1>{event_details.eventName}</h1>
          <p>Hosted by <span>{event_details.hostName}</span></p>
          <div className="detail-cards">
            <img id="calendar" alt="calendar" src={Calendar} />
            <h4>{event_details.eventDate}</h4>
            <h5>to 19 August 1:00PM UTC +10</h5>
            <br />
            <img id="location" alt="location" src={Location} />
            <h4>{event_details.location}</h4>
            <h5>to 19 August 1:00PM UTC +10</h5>
          </div>
        </div>
        <img id="cake" src={Cake} alt="birthday cake" />
      </div>
    </div>
  )
}

export default EventPage;