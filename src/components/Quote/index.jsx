import React, { useState, useEffect } from 'react'
import './style.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import quotes from '../../data/quotes.json'

function Quote() {
  const [quote, setQuote] = useState({
    "quote": "Test",
    "book": 'Test'
  })

  const generateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * (5))]
    const { quote, book } = randomQuote
    setQuote({
      "quote": quote, 
      "book": book
    })
  }

  useEffect(() => {
    generateQuote()
  }, [])


  return (
    <section className="vh-100" style={{ backgroundColor: "#f5f7fa" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="9" lg="7" xl="5">
            <MDBCard>
              <MDBCardBody>
                <MDBTypography
                  blockquote
                  className="blockquote-custom bg-white px-3 pt-4"
                >
                  <div className="blockquote-custom-icon bg-info shadow-1-strong">
                    <MDBIcon fas icon="quote-left text-white" />
                  </div>
                  <p className="mb-0 mt-2 font-italic">
                    { quote.quote }
                  </p>
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                    From 
                    <cite title="Source Title"> { quote.book }</cite>
                  </footer>
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
            <button onClick={ generateQuote }>Generate new quote</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default Quote