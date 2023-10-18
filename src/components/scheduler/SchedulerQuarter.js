import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export const SchedulerQuarter = () => {
  return (
    <>
      <div className="row quarter-calender-container">
        <div className="row quarter-monthSelection">
          <div className="col-sm-auto">
            <FaRegArrowAltCircleLeft size={20} color="#F37721" />
          </div>
          <div className="col text-center">
            <h3 className="quarter-monthName">2023</h3>
          </div>
          <div className="col-sm-auto">
            <FaRegArrowAltCircleRight size={20} color="#F37721" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 ps-0">
            <div className="quarter-container">
              <h3 className="quarterName text-center">Q1</h3>
              <div className="row px-3">
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">January</h3>
                </div>
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">Febrauary</h3>
                </div>
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">March</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 ps-0">
            <div className="quarter-container">
              <h3 className="quarterName text-center">Q2</h3>
              <div className="row px-3">
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">April</h3>
                </div>
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">May</h3>
                </div>
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">June</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 ps-0">
            <div className="quarter-container">
              <h3 className="quarterName text-center">Q3</h3>
              <div className="row px-3">
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">July</h3>
                </div>
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">August</h3>
                </div>
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">September</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 ps-0">
            <div className="quarter-container">
              <h3 className="quarterName text-center">Q4</h3>
              <div className="row px-3">
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">October</h3>
                </div>
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">November</h3>
                </div>
                <div className="col-sm-4 quarter-months">
                  <h3 className="q-monthName text-center">December</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
