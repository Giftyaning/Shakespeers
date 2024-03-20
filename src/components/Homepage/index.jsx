import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { globalCurrentPlay } from '../../contexts/globalCurrentPlay'
import plays from '../../data/plays.js'
import './style.css'




function Homepage() {
  // Initialise navigation functionality
  const navigate = useNavigate()

  // Retrieve global context items
  const { localData, handleLocalData } = useContext(globalCurrentPlay)

  // Create list of options for plays from play.js file
  const playList = plays.map(play => <option value={ play.name } key={ play.name }>{ play.name }</option>)
  
  // Handle form submission when submit button is pressed
  function handleSubmit(event) {
    event.preventDefault()

    // Set global play context using selection
    const newLocalObj = {
      ...localData,
      "activePlaySearch": event.target[0].value
    }
    handleLocalData(newLocalObj)
    
    // Navigate user to quotes page
    navigate('/quotes')                 
  }

  return (
    <div className="container-fluid home-container">
      <div className="container home-card">
        <div className="branding">
          <img src="https://github.com/Giftyaning/Shakespeers/blob/main/src/assets/happ-speare.png?raw=true" className="logoFace"></img>
          <img src="https://github.com/Giftyaning/Shakespeers/blob/main/src/assets/shakespeers-logo-black.png?raw=true" className="logoText"></img>
        </div>
        <div>
          <p>Welcome to the ShakesPeers revision App</p>
        </div>

        <div>
          <div className="dropdown">
            <form onSubmit={ handleSubmit }>
              <label htmlFor="plays">Choose a play</label>
              <select id="plays" name="plays">
                { playList }
              </select>
              <input className="btn bg-primary text-light" type="submit"></input>
            </form>
          </div>
        </div>

        <div>
          <label htmlFor="name">Enter your name</label> 
          <input type="text" id="name" placeholder="Your name"></input>
        </div>

        <div>
          <label>Watch the Tutorial here</label> 
          <div className="tutorial-box"></div>
        </div>

        <div>
          <button className="btn bg-primary text-light">See My Saved Quotes</button>
        </div>
      </div>
    </div> 
  )
}

export default Homepage;
