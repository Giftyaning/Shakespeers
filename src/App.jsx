import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Quote from './components/Quote/index.jsx'
import Homepage from './components/Homepage/index.jsx'


function App() {

  return (
    <>
      <Homepage/>
      <Quote/>
    </>
  )
}

export default App
