import React, { useState, useContext } from 'react'
import plays from '../../data/plays.js'
import { globalCurrentPlay } from '../../contexts/globalCurrentPlay'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // Initialise navigation functionality
  const navigate = useNavigate()

  // Retrieve global context items
  const { 
    localData, 
    handleLocalData, 
    quote, 
    setQuote, 
    responses, 
    setResponses, 
    saveResponses, 
    generateQuote, 
    loadResponses
  } = useContext(globalCurrentPlay)

  /**
     *  Get matching objects from object
     *  Object.filter function sourced externally via
     *  https://www.geeksforgeeks.org/how-to-implement-a-filter-for-objects-in-javascript/
     */
  Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

  // Create list of <ul> elements from plays from play.js file
  const playList = plays.map(play => {
    // Get all matching reponses from local data
    const responses = Object.values(localData.quotesFeedback)

    // Declare variables for map enclosure to hold response <li> element
    let responsesEl

    // Load a selected quote from the navbar menu
    function loadSelection( event ) {
    const hash = event.target.dataset.hash
    generateQuote( true, hash)
    }

    // Map over values of filtered response and create <li> elements
    const filteredResponses = Object.filter(responses, response => response.play === play.name)
    if (Object.keys(filteredResponses).length) {
      const filteredResponsesArr = Object.values(filteredResponses)
      responsesEl = filteredResponsesArr.map(response => {
        // Truncate quote to 30 characters
        const truncQuote = response.quote.substring(0, 30) + '...'
        return (
          <li 
            onClick={ loadSelection } 
            data-hash={ response.play + response.index } 
            key={ response.index }
            >
              { truncQuote }
            </li>
        )
      })
    }

    // Return result of both maps
    return (
      <ul value={ play.name } key={ play.name }>
        <h5>{ play.name }</h5>
        { responsesEl }
      </ul>
    )
  })

  return (
    <section className="d-flex flex-column justify-content-between">
      <button className="random-quote-button bg-primary text-light" onClick={() => navigate('/')}>Homepage</button>
      <div>
        <h3> My Quotes</h3>
        <div>
          { playList }
        </div>
      </div>
      <hr></hr>
    </section>
  )
}

export default Navbar