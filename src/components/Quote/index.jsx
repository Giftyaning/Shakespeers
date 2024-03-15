import React, { useState } from 'react'
import plays from '../../data/plays.js'
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



const Quote = () => {
  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    if (plays.length === 0) {
      console.error('No plays data available.');
      return;
    }

    const randomPlayIndex = Math.floor(Math.random() * plays.length);
    const randomPlay = plays[randomPlayIndex];
    const randomPlayName = randomPlay.name

    if (!randomPlay.quotes || randomPlay.quotes.length === 0) {
      console.error('No quotes available for the selected play.');
      return;
    }

    const randomQuoteIndex = Math.floor(Math.random() * randomPlay.quotes.length);
    const selectedQuote = randomPlay.quotes[randomQuoteIndex];
    setQuote({
      "quote":selectedQuote,
      "play":randomPlayName
    });
        };


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
                    {quote && <p className="random-quote">{quote.quote}</p>}
                  </p>
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                    From 
                    <cite title="Source Title"> { quote.play }</cite>
                  </footer>
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
            <button className="random-quote-button" onClick={generateQuote}>Generate Random Quote</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
};

export default Quote;