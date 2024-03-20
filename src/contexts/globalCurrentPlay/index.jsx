import {useState, useEffect, createContext} from 'react'
import plays from '../../data/plays.js'

export const globalCurrentPlay = createContext()

const GlobalContext = ({ children }) => {
  // Retrieve local data object, if none exists create a blank template
  let localObj
  if (localObj = localStorage.getItem('shakespeersLocalData')) localObj = JSON.parse(localObj)
  else localObj = {
    activePlaySearch: '',
    quotesFeedback: ''
  }
  
  // Set up state variable fors local storage object
  const [localData, setLocalData] = useState(localObj)

  // State variables for temporarily storing quote
  const [quote, setQuote] = useState({
    'quote': '',
    'play': '',
    'index': ''
  })

  // State variable for storing name
  const [ name, setName ] = useState({
    'name': ''
  })

  // State variables for temporarily storing responses
  const [responses, setResponses] = useState({})

  // Set new global context and store in local storage
  const handleLocalData = (obj) => {
    // Store in global context
    const newLocalData = {...localData, ...obj}
    setLocalData(newLocalData)

    // Store in local storage
    localStorage.setItem('shakespeersLocalData', JSON.stringify(newLocalData))
  }
  
  // Generate a random quote using the global play context
  const generateQuote = ( selection = false, hash ) => {
    // Validate play data
    if (plays.length === 0) {
      console.error('No plays data available.');
      return;
    }
    
    // Clear out previous responses
    setResponses({
      'play': '',
      'quote': '',
      'index': '',
      'contextualDetails': '',
      'literaryFeatures': '',
      'authorialIntent': ''
    })

    // Get current play data, use local storage to ensure we get cached result on event of refresh
    const currPlayData = plays.find((arrPlay) => arrPlay.name === localData.activePlaySearch)
    let currPlayName = currPlayData.name

    // Valide quotes data
    if (!currPlayData.quotes || currPlayData.quotes.length === 0) {
      console.error('No quotes available for the selected play.');
      return;
    }

    // Declare vars for use in selection
    let selectedQuote
    let newQuote

    // Not a selection, generate a random quote
    if (!selection) {
      // Generate a random quote, ensuring that quotes with feedback are skipped
      let randomQuoteIndex
      do {
        randomQuoteIndex = Math.floor(Math.random() * currPlayData.quotes.length)
      } while (localData.quotesFeedback[currPlayName + randomQuoteIndex])

      // Create object for storing in local state
      selectedQuote = currPlayData.quotes[randomQuoteIndex]
      newQuote = {
        "quote": selectedQuote,
        "play": currPlayName,
        "index": randomQuoteIndex
      }

      // Store in state and load any found responses
      setQuote(newQuote)
      loadResponses(newQuote)

      // Prevent selection code from running
      return
    }
  
    // Get current quote using hash and store in state
    selectedQuote = localData.quotesFeedback[hash]
    newQuote = {
      "quote": selectedQuote.quote,
      "play": selectedQuote.play,
      "index": selectedQuote.index
    }

    // Store in local storage and load any found responses
    setQuote(newQuote)
    loadResponses(newQuote)

    // Set new active play search
    const newLocalObj = {
      ...localData,
      "activePlaySearch": selectedQuote.play
    }
    handleLocalData(newLocalObj)
    currPlayName = selectedQuote.play
  };

  // Trigger saving responses to local storage
  const saveResponses = () => {
    // Create a hash of the play and quote index to store the response in local storage
    const quoteHashKey = quote.play + quote.index

    // Create copy of current quotes object and add new response / overwrite existing response
    const newResponseObj = {...localData.quotesFeedback}
    newResponseObj[quoteHashKey] = {
      'play': quote.play,
      'quote': quote.quote,
      'index': quote.index,
      'contextualDetails': responses.contextualDetails,
      'literaryFeatures': responses.literaryFeatures,
      'authorialIntent': responses.authorialIntent
    }

    // Create new object - set in global context and local storage
    const newLocalStorageData = { ...localData, 'quotesFeedback': newResponseObj}
    handleLocalData(newLocalStorageData)
  }

  // Load previous responses to quote
  const loadResponses = (newQuote) => {
    // Create a hash of the play and quote index to store the response in local storage
    const quoteHashKey = newQuote.play + newQuote.index

    // Check if quote has any matching responses in local data
    if (localData.quotesFeedback[quoteHashKey]) {
      const responses = localData.quotesFeedback[quoteHashKey]
      setResponses(responses)
    }
  }
  
  // Set up elements for context export
  const data = {
    localData,
    handleLocalData,
    quote,
    setQuote,
    name,
    setName,
    responses,
    setResponses,
    saveResponses,
    generateQuote,
    loadResponses
  }

  return (
    <globalCurrentPlay.Provider value={data}>{ children }</globalCurrentPlay.Provider>
  )
}


export default GlobalContext