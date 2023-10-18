import React from "react";

const Feedback = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <div className="feedback-container1">
              <div className="row">
                <h2 className="feedback-heading">Feedback</h2>
                <p className="feedback-para">
                  How was your experience using the CU dashboard ?
                </p>
                <textarea
                  className="describe-experience"
                  rows="6"
                  placeholder="Describe your experience here"
                ></textarea>
              </div>
              <div className="row feedback-radio mt-3">
                <div className="col-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Bug
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Suggestion
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Complaint
                    </label>
                  </div>
                </div>

                <div className="col d-flex justify-content-end">
                  <button type="button" className="btn send-btn">
                    Send
                  </button>
                </div>
              </div>
            </div>

            <div className="feedback-container2">
              <div className="row">
                <div className="col-sm-auto">
                  <h2 className="userRequest-heading">User Requests</h2>
                </div>
                <div className="col-sm d-flex justify-content-end">
                  <input type="date" placeholder="Date" className="date" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 feedback-container2">
                  <h3 className="reqTicket-heading">Request Tickets</h3>
                  <div className="row ticket-container">
                    <div className="col-sm-6">
                      <h3 className="reqTicket">Unresolved</h3>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-end">
                      <h3 className="reqTicket">2</h3>
                    </div>
                  </div>
                  <div className="row ticket-container">
                    <div className="col-sm-6">
                      <h3 className="reqTicket">Resolved</h3>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-end">
                      <h3 className="reqTicket">2</h3>
                    </div>
                  </div>
                  <div className="row ticket-container">
                    <div className="col-sm-10">
                      <h3 className="reqTicket">Pending Resolution</h3>
                    </div>
                    <div className="col-sm-2 d-flex justify-content-end">
                      <h3 className="reqTicket">2</h3>
                    </div>
                  </div>
                  <div className="row ticket-container">
                    <div className="col-sm-6">
                      <h3 className="reqTicket">Escalated</h3>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-end">
                      <h3 className="reqTicket">2</h3>
                    </div>
                  </div>
                </div>

                <div className="col-sm-9 feedback-container2 feedMessage ms-3">
                  <div className="row">
                    <div className="col-sm-auto">
                      <h3 className="message-heading">Message</h3>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h3 className="message-heading">Action</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <h3 className="messsageNotifyDate">
                      Showing 3 results , 24/07/2023
                    </h3>
                  </div>
                  <div className="messageContainer">
                    <div className="row">
                      <div className="col-sm-auto d-flex align-items-center">
                        <input type="checkbox" id="myCheckbox" />
                      </div>
                      <div className=" col-sm d-flex justify-content-end messageSubContainer my-3">
                        <div className="row">
                          <div className="col-sm-auto">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Bibendum est
                            </p>
                          </div>
                          <div className=" col-sm-auto"></div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-auto d-flex align-items-center">
                        <input type="checkbox" id="myCheckbox" />
                      </div>
                      <div className=" col-sm d-flex justify-content-end messageSubContainer my-3">
                        <div className="row">
                          <div className="col-sm-auto">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Bibendum est
                            </p>
                          </div>
                          <div className=" col-sm-auto"></div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-auto d-flex align-items-center">
                        <input type="checkbox" id="myCheckbox" />
                      </div>
                      <div className=" col-sm d-flex justify-content-end messageSubContainer my-3">
                        <div className="row">
                          <div className="col-sm-auto">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Bibendum est
                            </p>
                          </div>
                          <div className=" col-sm-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
