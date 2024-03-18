import React from "react"
import './style.css'




function Homepage() {
  return (

<div className="homepageContainer">
    <div>
    <img src="./src/assets/happ-speare.png" className="logoFace"></img>
    <img src="./src/assets/logo.png" className="logoText"></img>
      <p className="welcomeMessage"> Find inspiring quotes instantly to boost your studies or brighten your day. <br /> Just click to uncover timeless wisdom from the legendary playwright himself.</p>
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
Enter your name here....
</textarea>
    </div>

    <div>    
      <img className="tutorial" src="./src/assets/Videotutorial.jpg"></img>
      </div>

      <div className="buttonContainer">
        <button className="seeQuotesButton">See My Saved Quotes</button>
      </div>


</div> 
  )
}

export default Homepage;
