import React, { useState, useContext, useEffect } from "react";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
import { globalCurrentPlay } from "../../contexts/globalCurrentPlay";
// import { Toast } from "bootstrap";
import toast, {Toaster} from "react-hot-toast";
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
  function generatePDF(responses, quote) {
    const doc = new jsPDF();
    const maxWidth = 180;
    const answer1 = responses.contextualDetails;
    const answer2 = responses.literaryFeatures;
    const answer3 = responses.authorialIntent;

    doc.setTextColor(0, 0, 255);
    doc.setFontSize(12);
    doc.text(
      "Please find below your responses to the play " + quote.play,
      10,
      20
    );

    const lines1 = doc.splitTextToSize(answer1, maxWidth);
    doc.text("Contextual Details", 10, 40);
    let y = 50;

    for (let i = 0; i < lines1.length; i++) {
      doc.text(10, y, lines1[i]);
      y += 10;
    }
    y += 10;
    doc.text("Literary Features", 10, y);
    const lines2 = doc.splitTextToSize(answer2, maxWidth);
    y += 10;
    for (let i = 0; i < lines2.length; i++) {
      doc.text(10, y, lines2[i]);
      y += 10;
    }
    y += 10;
    doc.text("Authorial Intent", 10, y);
    const lines3 = doc.splitTextToSize(answer3, maxWidth);
    y += 10;
    for (let i = 0; i < lines3.length; i++) {
      doc.text(10, y, lines3[i]);
      y += 10;
    }

    doc.save("Shakespeers.pdf");
  }


  // help button
  const [toastMessage, setToastMessage] = useState('');
  

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
      <Toaster />
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
                        <button type="button" onClick={()=>{
                          toast.custom((t) => (
                            <div
                              className={`${
                                t.visible ? 'animate-enter' : 'animate-leave'
                              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                            >
                              <div className="flex-1 w-0 p-4">
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 pt-0.5">
                                    <img
                                      id="happy"
                                      className="h-10 w-10 rounded-full"
                                      src="https://github.com/Giftyaning/Shakespeers/blob/main/src/assets/happ-speare.png?raw=true">
                                    </img>
                                  </div>
                                  <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      Contextual Details
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Sure! 8:30pm works great!
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex border-l border-gray-200">
                                <button
                                  onClick={() => toast.dismiss(t.id)}
                                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          ))
                        } } className="btn rounded-pill bg-primary text-light help-btn">
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
                        <button type="button" onClick={()=>{
                          toast.custom((t) => (
                            <div
                              className={`${
                                t.visible ? 'animate-enter' : 'animate-leave'
                              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                            >
                              <div className="flex-1 w-0 p-4">
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 pt-0.5">
                                    <img
                                      id="happy"
                                      className="h-10 w-10 rounded-full"
                                      src="https://github.com/Giftyaning/Shakespeers/blob/main/src/assets/happ-speare.png?raw=true">
                                    </img>
                                  </div>
                                  <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      Literary Features
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Sure! 8:30pm works great!
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex border-l border-gray-200">
                                <button
                                  onClick={() => toast.dismiss(t.id)}
                                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          ))
                        } } className="btn rounded-pill bg-primary text-light help-btn">
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
                        <button type="button" onClick={()=>{
                          toast.custom((t) => (
                            <div
                              className={`${
                                t.visible ? 'animate-enter' : 'animate-leave'
                              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                            >
                              <div className="flex-1 w-0 p-4">
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 pt-0.5">
                                    <img
                                      id="happy"
                                      className="h-10 w-10 rounded-full"
                                      src="https://github.com/Giftyaning/Shakespeers/blob/main/src/assets/happ-speare.png?raw=true">
                                    </img>
                                  </div>
                                  <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      Authorial Intent
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Sure! 8:30pm works great!
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex border-l border-gray-200">
                                <button
                                  onClick={() => toast.dismiss(t.id)}
                                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          ))
                        } } className="btn rounded-pill bg-primary text-light help-btn">
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
              onClick={() => generatePDF(responses, quote)}
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
