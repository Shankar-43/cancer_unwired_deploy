import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const SchedularDay = () => {
  
  return (
    <>
      <div className="row day-calender-container">
        <div className="row">
          <div className="col-sm-2">
            <div className="row day-monthSelection">
              <div className="col-sm-auto">
                <FaRegArrowAltCircleLeft size={20} color="#F37721" />
              </div>
              <div className="col text-center">
                <h3 className="day-monthName">June</h3>
              </div>
              <div className="col-sm-auto">
                <FaRegArrowAltCircleRight size={20} color="#F37721" />
              </div>
            </div>
          </div>
          <div className="col-sm-auto">
            <button type="button" class="btn thisWeek-btn">
              This Week
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-auto dayColumn">
                <h3 className="ds-day text-center">Monday</h3>
                <h3 className="ds-day text-center">1</h3>
              </div>
              <div className="col-sm-auto dayColumn">
                <h3 className="ds-day text-center">Tuesday</h3>
                <h3 className="ds-day text-center">2</h3>
              </div>
              <div className="col-sm-auto dayColumn">
                <h3 className="ds-day text-center">Wednesday</h3>
                <h3 className="ds-day text-center">3</h3>
              </div>
              <div className="col-sm-auto dayColumn">
                <h3 className="ds-day text-center">Thursday</h3>
                <h3 className="ds-day text-center">4</h3>
              </div>
              <div className="col-sm-auto dayColumn">
                <h3 className="ds-day text-center">Friday</h3>
                <h3 className="ds-day text-center">5</h3>
              </div>
              <div className="col-sm-auto dayColumn">
                <h3 className="ds-day text-center">saturday</h3>
                <h3 className="ds-day text-center">6</h3>
              </div>
              <div className="col-sm-auto dayColumn">
                <h3 className="ds-day text-center">Sunday</h3>
                <h3 className="ds-day text-center">7</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-1 time-container">
            <div>
              <h6 className="ds-day text-center">8 am</h6>
              <h6 className="ds-day text-center">9 am</h6>
              <h6 className="ds-day text-center">10 am</h6>
              <h6 className="ds-day text-center">11 am</h6>
              <h6 className="ds-day text-center">12 pm</h6>
              <h6 className="ds-day text-center">1 pm</h6>
              <h6 className="ds-day text-center">2 pm</h6>
              <h6 className="ds-day text-center">3 pm</h6>
              <h6 className="ds-day text-center">4 pm</h6>
              <h6 className="ds-day text-center">5 pm</h6>
              <h6 className="ds-day text-center">6 pm</h6>
            </div>
          </div>
          <div className="col-sm-11 daySchedule-container">
            <h1>1pm</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedularDay;
