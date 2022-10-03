import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './CreateEvent.css'

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [hostName, setHostName] = useState('');
  const [location, setLocation] =  useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const eventNameHandler = (event) => {
    setEventName(event.target.value);
  }

  const hostNameHandler = (event) => {
    setHostName(event.target.value);
  }

  const locationHandler = (event) => {
    setLocation(event.target.value);
  }

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  }

  const imageHandler = (event) => {
    setSelectedImage(event.target.files[0]);
  }

  const formHandler = (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      navigate("/event")
    } catch {
      alert("Error!")
    }
    console.log(eventName, hostName, location, description);
  }

  return (
    <div className="event-container">
      <div className="event-container__inner">
        <h1 className="title">Create Your Event 🔥</h1>
        <form className="event-form" onSubmit={formHandler}>
        <div className="input-box">
              <input 
                type="text" 
                placeholder='🎉 Event Name' 
                value={eventName} 
                onChange={eventNameHandler} 
                required 
              />
            </div>
            <div className="input-box">
              <input 
                type="text" 
                placeholder='🎙️ Host Name' 
                value={hostName} 
                onChange={hostNameHandler} 
                required
              />
            </div>
            <div className="input-box">
              <input 
                type="date" 
                placeholder='Date 🗓️' 
                required 
              />
            </div>
            <div className="input-box">
              <input 
                type="text" 
                placeholder='📌 Location (optional)'
                value={location} 
                onChange={locationHandler}  
              />
            </div>
            <div className="input-box">
              <input 
                type="text" 
                placeholder='✏️ Description (optional)'
                value={description} 
                onChange={descriptionHandler}  
              />
            </div>
              <input 
                type="file" 
                value={selectedImage}
                onChange={imageHandler}
              />
            <div className="input-box button">
              <input type="Submit" value="Create Event" disabled={loading}/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEvent