"use client";
import ReactPlayer from "react-player";
import React, { useState } from "react";
import PrescriptionModal from "./PrescriptionModal";

import { FaSearch } from "react-icons/fa";

const Appointment = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container-fluid appointment-container">
        <div className="row">
          <div className="col-sm-10 offset-sm-2 ">
            <div className="row">
              <div className="col-sm-3">
                <div className="row inner-outline mx-1 p-4">
                  <p className="purple-title text-center">Appointments Today</p>
                  <p className="purple-number text-center">1</p>
                  <p className="purple text-center">Consultations Scheduled</p>
                </div>

                <div className="inner-outline1">
                  <div className="row inner-inner-outline mx-3 p-4">
                    <p className="purple-title text-center">
                      Completed Appointments Today
                    </p>
                    <p className="purple-number text-center">4</p>
                    <p className="purple text-center">
                      Consultations Completed
                    </p>
                  </div>

                  <div className="row inner-inner-outline mx-3 p-4">
                    <p className="purple-title text-center">
                      Cancelled Appointments Today
                    </p>
                    <p className="purple-number text-center">1</p>
                    <p className="purple text-center">
                      Consultations Cancelled
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-9 content-right">
                <div className="row mb-2 mt-2">
                  <div className="col-sm-5">
                    <p className="custom-heading">All Appointments</p>
                  </div>
                  <div className="col-sm-7">
                    <div className="row">
                      <div className="col-sm-6 ">
                        <div className="input-group input-group-sm selectDate ">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Search by date"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group input-group-sm searchbar">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <span
                            className="input-group-text search-span"
                            id="addon-wrapping"
                          >
                            <button type="button" className="btn search-btn">
                              <FaSearch size={24} color={"#9426b2"} />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-auto custom-overflow-2">
                  <div className="row content-holder-2 mb-3 ms-1">
                    <div className="col-sm-4">
                      <div className="video-play mt-3"></div>
                      {/* <ReactPlayer
                        url="https://youtu.be/QziLWi9VQgE"
                        controls
                        width="100%"
                        height="auto"
                      /> */}
                    </div>
                    <div className="col-sm-3 my-2">
                      <p className="purple-content">
                        Appointment-1
                        <br />
                        <span className="purple-inner-content">
                          Duration<span className="ms-5">54:45 mins</span>
                          <br />
                          Patient Name<span className="ms-3">John Wickens</span>
                          <br />
                          Affliction<span className="ms-5">Lung Cancer</span>
                          <br />
                          Date<span className="ms-5">24/04/2023</span>
                          <br />
                        </span>
                        <span className="purple-date">
                          Prescription Issued 24/5/2023
                        </span>
                      </p>

                      <div>
                        <button
                          type="button"
                          className="btn btn-primary blue-btn btn-sm"
                          onClick={openModal}
                        >
                          Prescription
                        </button>
                        <PrescriptionModal
                          show={showModal}
                          onClose={closeModal}
                        />
                        {/* {isModalOpen && (
                          <PrescriptionModal closeModal={closeModal} />
                        )} */}
                      </div>
                    </div>
                    <div className="col-sm-5  my-2">
                      <div className="row d-flex justify-content-end">
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary purple-btn btn-sm"
                          >
                            Download Recording
                          </button>
                        </div>
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary darkgreen-btn btn-sm"
                          >
                            Prescription Issued
                          </button>
                        </div>
                      </div>
                      <div className="content-holder-2 my-2 py-0">
                        <div className="row">
                          <div className="col-sm-auto">
                            <p className="call-transcript">Call transcript</p>
                          </div>
                          <div className="col-sm d-flex justify-content-end">
                            <p className="purple-title download-transcript">
                              Download Transcript
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row content-holder-2 mb-3 ms-1">
                    <div className="col-sm-4">
                      <div className="video-play mt-3"></div>
                    </div>
                    <div className="col-sm-3 my-2">
                      <p className="purple-content">
                        Appointment-1
                        <br />
                        <span className="purple-inner-content">
                          Duration<span className="ms-5">54:45 mins</span>
                          <br />
                          Patient Name<span className="ms-3">John Wickens</span>
                          <br />
                          Affliction<span className="ms-5">Lung Cancer</span>
                          <br />
                          Date<span className="ms-5">24/04/2023</span>
                          <br />
                        </span>
                        <span className="purple-date">
                          Prescription Issued 24/5/2023
                        </span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary blue-btn btn-sm"
                      >
                        Prescription
                      </button>
                    </div>
                    <div className="col-sm-5  my-2">
                      <div className="row d-flex justify-content-end">
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary purple-btn btn-sm"
                          >
                            Download Recording
                          </button>
                        </div>
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary darkgreen-btn btn-sm"
                          >
                            Prescription Issued
                          </button>
                        </div>
                      </div>
                      <div className="content-holder-2 my-2 py-0">
                        <div className="row">
                          <div className="col-sm-auto">
                            <p className="call-transcript">Call transcript</p>
                          </div>
                          <div className="col-sm d-flex justify-content-end">
                            <p className="purple-title download-transcript">
                              Download Transcript
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row content-holder-2 mb-3 ms-1">
                    <div className="col-sm-4">
                      <div className="video-play mt-3"></div>
                    </div>
                    <div className="col-sm-3 my-2">
                      <p className="purple-content">
                        Appointment-1
                        <br />
                        <span className="purple-inner-content">
                          Duration<span className="ms-5">54:45 mins</span>
                          <br />
                          Patient Name<span className="ms-3">John Wickens</span>
                          <br />
                          Affliction<span className="ms-5">Lung Cancer</span>
                          <br />
                          Date<span className="ms-5">24/04/2023</span>
                          <br />
                        </span>
                        <span className="purple-date">
                          Prescription Issued 24/5/2023
                        </span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary blue-btn btn-sm"
                      >
                        Prescription
                      </button>
                    </div>
                    <div className="col-sm-5  my-2">
                      <div className="row d-flex justify-content-end">
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary purple-btn btn-sm"
                          >
                            Download Recording
                          </button>
                        </div>
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary darkgreen-btn btn-sm"
                          >
                            Prescription Issued
                          </button>
                        </div>
                      </div>
                      <div className="content-holder-2 my-2 py-0">
                        <div className="row">
                          <div className="col-sm-auto">
                            <p className="call-transcript">Call transcript</p>
                          </div>
                          <div className="col-sm d-flex justify-content-end">
                            <p className="purple-title download-transcript">
                              Download Transcript
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row content-holder-2 mb-3 ms-1">
                    <div className="col-sm-4">
                      <div className="video-play mt-3"></div>
                    </div>
                    <div className="col-sm-3 my-2">
                      <p className="purple-content">
                        Appointment-1
                        <br />
                        <span className="purple-inner-content">
                          Duration<span className="ms-5">54:45 mins</span>
                          <br />
                          Patient Name<span className="ms-3">John Wickens</span>
                          <br />
                          Affliction<span className="ms-5">Lung Cancer</span>
                          <br />
                          Date<span className="ms-5">24/04/2023</span>
                          <br />
                        </span>
                        <span className="purple-date">
                          Prescription Issued 24/5/2023
                        </span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary blue-btn btn-sm"
                      >
                        Prescription
                      </button>
                    </div>
                    <div className="col-sm-5  my-2">
                      <div className="row d-flex justify-content-end">
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary purple-btn btn-sm"
                          >
                            Download Recording
                          </button>
                        </div>
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary darkgreen-btn btn-sm"
                          >
                            Prescription Issued
                          </button>
                        </div>
                      </div>
                      <div className="content-holder-2 my-2 py-0">
                        <div className="row">
                          <div className="col-sm-auto">
                            <p className="call-transcript">Call transcript</p>
                          </div>
                          <div className="col-sm d-flex justify-content-end">
                            <p className="purple-title download-transcript">
                              Download Transcript
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row content-holder-2 mb-3 ms-1">
                    <div className="col-sm-4">
                      <div className="video-play mt-3"></div>
                    </div>
                    <div className="col-sm-3 my-2">
                      <p className="purple-content">
                        Appointment-1
                        <br />
                        <span className="purple-inner-content">
                          Duration<span className="ms-5">54:45 mins</span>
                          <br />
                          Patient Name<span className="ms-3">John Wickens</span>
                          <br />
                          Affliction<span className="ms-5">Lung Cancer</span>
                          <br />
                          Date<span className="ms-5">24/04/2023</span>
                          <br />
                        </span>
                        <span className="purple-date">
                          Prescription Issued 24/5/2023
                        </span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary blue-btn btn-sm"
                      >
                        Prescription
                      </button>
                    </div>
                    <div className="col-sm-5  my-2">
                      <div className="row d-flex justify-content-end">
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary purple-btn btn-sm"
                          >
                            Download Recording
                          </button>
                        </div>
                        <div className="col-sm-auto">
                          <button
                            type="button"
                            className="btn btn-primary darkgreen-btn btn-sm"
                          >
                            Prescription Issued
                          </button>
                        </div>
                      </div>
                      <div className="content-holder-2 my-2 py-0">
                        <div className="row">
                          <div className="col-sm-auto">
                            <p className="call-transcript">Call transcript</p>
                          </div>
                          <div className="col-sm d-flex justify-content-end">
                            <p className="purple-title download-transcript">
                              Download Transcript
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="blue-content">Time stamp</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="content-sub-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
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
      </div>
    </>
  );
};

export default Appointment;
