import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Quote from './components/Quote';


function App() {

  return (
    <>
      <h1>
        Shakespeers
      </h1>
      <Quote/>
    </>
  )
}

export default App
