import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { globalCurrentPlay } from '../../contexts/globalCurrentPlay'
import plays from '../../data/plays.js'
import './style.css'

function Homepage() {
  // Initialise navigation functionality
  const navigate = useNavigate()

  // Retrieve global context items
  const { localData, handleLocalData, name, setName } = useContext(globalCurrentPlay)

  // Temporary name
  const [tempName, setTempName] = useState({
    'name': ''
  })

  // Retrieve name from local storage if it exists
  useEffect(() => {
    if (localData.name) {
      setName({
        ...name,
        'name': localData.name
      })
    }
  }, []) 

  // Create list of options for plays from play.js file
  const playList = plays.map(play => <option value={ play.name } key={ play.name }>{ play.name }</option>)
  
  // Handle form submission when submit button is pressed
  function handleSubmit(event) {
    event.preventDefault()

    // Set global play context using selection
    const newLocalObj = {
      ...localData,
      "name": tempName.name,
      "activePlaySearch": event.target[0].value
    }
    handleLocalData(newLocalObj)
    
    // Navigate user to quotes page
    navigate('/quotes')                 
  }

  return (
    <div className="container-fluid home-container">
        <div className="branding">
          <img src="https://github.com/Giftyaning/Shakespeers/blob/main/src/assets/happ-speare.png?raw=true" className="logoFace"></img>
          <img src="https://github.com/Giftyaning/Shakespeers/blob/main/src/assets/shakespeers-logo-black.png?raw=true" className="logoText"></img>
        </div>
      <div className="container home-card">
        <div>
          <p className="welcome"><strong>Welcome to the ShakesPeers Revision App</strong></p>
          <p className="instructions">choose a play<br></br> 
          read random quote<br></br>
          show your knowledge<br></br>
          share with peers</p>
        </div>
        
        <div>
          { name?.name ? 'Welcome back ' + name.name : 
          <form>
          <label htmlFor="name">Enter your name</label> 
          <input type="text" id="name" placeholder="Your name" value={tempName.name} onChange={(e) =>
            setTempName({
              ...name,
              'name': e.target.value
            })}>
          </input>
        </form>
        }
          
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
          <label>Watch the Tutorial here</label> 
          <div className="tutorial-box"></div>
        </div>

        <div>
          <button className="btn bg-primary text-light" onClick={() => navigate('/quotes')}>See My Saved Quotes</button>
        </div>
      </div>
    </div> 
  )
}

export default Homepage;
