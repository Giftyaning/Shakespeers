import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Quotes from './pages/Quotes'
import Home from './pages/Home'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/quotes" element={<Quotes/>} />
      </Routes>
    </Router>
  )
}

export default App
