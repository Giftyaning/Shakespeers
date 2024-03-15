import React from "react"
import './style.css'




function Homepage() {
  return (

<div className="container">
    <div>
    <img src="./src/assets/happ-speare.png" className="logoFace"></img>
    <img src="./src/assets/logo.png" className="logoText"></img>
      <p>Welcome to the ShakesPeers revision App</p>
    </div>

    <div>

    <div className="dropdown">
  <button className="dropbtn">Select your play here</button>
  <div className="dropdown-content">
    <a href="#">Play 2</a>
    <a href="#">Play 2</a>
    <a href="#">Play 3</a>
  </div>
</div>
    </div>

    <div>
    <h1></h1>
    <textarea rows="1" cols="50">
Enter your name here...
</textarea>
    </div>

    <div>    
      <h3>Watch the Tutorial here</h3> 
      </div>

    <button> See My Saved Quotes</button>
</div>
  )
}

export default Homepage;
