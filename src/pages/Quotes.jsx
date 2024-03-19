import React from 'react';
import './style.css'
import Quote from '../components/Quote';
import Navbar from '../components/Navbar';

function Quotes({ handleSetPlay, currentPlay }) {

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-3 p-2 d-flex flex-row align-items-stretch">
          <Navbar/>
        </div>
        <div className="col-9 p-0">
          <Quote/>
        </div>
      </div>
    </section>
    
  )
}

export default Quotes