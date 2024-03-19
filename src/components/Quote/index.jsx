import React, { useState, useContext, useEffect } from "react";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
import { globalCurrentPlay } from "../../contexts/globalCurrentPlay";
import plays from "../../data/plays.js";
import "./style.css";
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
  // Generate PDF
  function generatePDF(responses) {
    const doc = new jsPDF();
    //     var image = .../happ-sp // Work in progress
    // doc.addImage(image, 'JPEG', 15, 40, 180, 160); // Add image to the PDF
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(15);
    doc.text("Please find below your responses", 10, 20);

    doc.text("Key Contextual Details", 10, 40);
    doc.text(responses.contextualDetails, 10, 50);

    doc.text("Literary Features", 10, 70);
    doc.text(responses.literaryFeatures, 10, 80);
    
    doc.text("Authorial Intent", 10, 100);
    doc.text(responses.authorialIntent, 10, 110);

    doc.save("Shakespeers.pdf");
  }

  // Initialise navigation functionality
  const navigate = useNavigate();

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
    loadResponses,
  } = useContext(globalCurrentPlay);

  // Generate quote on page load
  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <section className="vh-100" style={{ backgroundColor: "var(--primary)" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol sm="9">
            <MDBCard>
              <MDBCardBody>
                <MDBTypography
                  blockquote
                  className="blockquote-custom bg-white px-3 pt-4"
                >
                  <div
                    className="blockquote-custom-icon shadow-1-strong"
                    style={{ backgroundColor: "var(--secondary)" }}
                  >
                    <MDBIcon fas icon="quote-left text-white" />
                  </div>
                  {quote && (
                    <p className="random-quote">{quote && quote.quote}</p>
                  )}
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                    From
                    <cite title="Source Title"> {quote && quote.play}</cite>
                  </footer>
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol sm="9" className="d-flex justify-content-between">
            <MDBCard style={{ width: "100%" }}>
              <MDBCardBody style={{ width: "100%" }}>
                <form>
                  <fieldset>
                    <h3>Your Responses</h3>

                    <div className="form-group">
                      <label className="control-label" htmlFor="contextual">
                        Key Contextual Details
                      </label>
                      <div className="text-group">
                        <textarea
                          className="form-control"
                          id="contextual"
                          name="contextual"
                          onChange={(e) =>
                            setResponses({
                              ...responses,
                              contextualDetails: e.target.value,
                            })
                          }
                          value={responses.contextualDetails}
                        ></textarea>
                        <button className="btn rounded-pill bg-primary text-light help-btn">
                          <i className="fa-solid fa-question"></i>
                        </button>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label" htmlFor="literary">
                        Literary Features
                      </label>
                      <div className="text-group">
                        <textarea
                          className="form-control"
                          id="literary"
                          name="literary"
                          onChange={(e) =>
                            setResponses({
                              ...responses,
                              literaryFeatures: e.target.value,
                            })
                          }
                          value={responses.literaryFeatures}
                        ></textarea>
                        <button className="btn rounded-pill bg-primary text-light help-btn">
                          <i className="fa-solid fa-question"></i>
                        </button>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label" htmlFor="authorial">
                        Authorial Intent
                      </label>
                      <div className="text-group">
                        <textarea
                          className="form-control"
                          id="authorial"
                          name="authorial"
                          onChange={(e) =>
                            setResponses({
                              ...responses,
                              authorialIntent: e.target.value,
                            })
                          }
                          value={responses.authorialIntent}
                        ></textarea>
                        <button className="btn rounded-pill bg-primary text-light help-btn">
                          <i className="fa-solid fa-question"></i>
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol sm="9" className="d-flex justify-content-between">
            <button
              className="random-quote-button bg-light text-dark"
              onClick={() => generatePDF(responses)}
            >
              Generate PDF
            </button>
            <button
              className="random-quote-button bg-light text-dark"
              onClick={saveResponses}
            >
              Save Responses
            </button>
            <button
              className="random-quote-button bg-light text-dark"
              onClick={() => generateQuote()}
            >
              Next Quote
            </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Quote;
