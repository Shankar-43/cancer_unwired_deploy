import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const SchedulerMonth = () => {
  return (
    <>
      <div className="row calender-container">
        <div className="col-sm-2">
          <div className="row monthSelection">
            <div className="col-sm-auto">
              <FaRegArrowAltCircleLeft size={20} color="#F37721" />
            </div>
            <div className="col text-center">
              <h3 className="monthName">June</h3>
            </div>
            <div className="col-sm-auto">
              <FaRegArrowAltCircleRight size={20} color="#F37721" />
            </div>
          </div>

          <div className="appointment-container">
            <div className="row appointmentDetails p-3" tabindex="0">
              <h3 className="appointment-day text-center" tabindex="0">
                Appointments Today
              </h3>
              <h2 className="appointment-count text-center">1</h2>
              <h3 className="Consultations text-center">
                Consultations Scheduled
              </h3>
            </div>
            <div className="row appointmentDetails p-3" tabindex="0">
              <h3 className="appointment-day text-center">
                Appointments Tomorrow
              </h3>
              <h2 className="appointment-count text-center">0</h2>
              <h3 className="Consultations text-center">
                Consultations Scheduled
              </h3>
            </div>
            <div className="row appointmentDetails p-3" tabindex="0">
              <h3 className="appointment-day text-center">
                Appointments on Friday
              </h3>
              <h2 className="appointment-count text-center">6</h2>
              <h3 className="Consultations text-center">
                Consultations Scheduled
              </h3>
            </div>
            <div className="row">
              <button type="button" class="btn viewAll-button mx-auto">
                View All
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-10">
          <div className="row">
            <div className="col-sm-1 day-column">
              <h3 className="dayName text-center">Monday</h3>
              <div className="date-container">1</div>
              <div className="date-container">2</div>
              <div className="date-container">3</div>
              <div className="date-container">4</div>
              <div className="date-container">5</div>
            </div>
            <div className="col-sm-1 day-column">
              <h3 className="dayName text-center">Tuesday</h3>
              <div className="date-container">1</div>
              <div className="date-container">2</div>
              <div className="date-container">3</div>
              <div className="date-container">4</div>
              <div className="date-container">5</div>
            </div>
            <div className="col-sm-1 day-column">
              <h3 className="dayName text-center">Wednesday</h3>
              <div className="date-container">1</div>
              <div className="date-container">2</div>
              <div className="date-container">3</div>
              <div className="date-container">4</div>
              <div className="date-container">5</div>
            </div>
            <div className="col-sm-1 day-column">
              <h3 className="dayName text-center">Thursday</h3>
              <div className="date-container">1</div>
              <div className="date-container">2</div>
              <div className="date-container">3</div>
              <div className="date-container">4</div>
              <div className="date-container">5</div>
            </div>
            <div className="col-sm-1 day-column">
              <h3 className="dayName text-center">Friday</h3>
              <div className="date-container">1</div>
              <div className="date-container">2</div>
              <div className="date-container">3</div>
              <div className="date-container">4</div>
              <div className="date-container">5</div>
            </div>
            <div className="col-sm-1 day-column">
              <h3 className="dayName text-center">Saturday</h3>
              <div className="date-container">1</div>
              <div className="date-container">2</div>
              <div className="date-container">3</div>
              <div className="date-container">4</div>
              <div className="date-container">5</div>
            </div>
            <div className="col-sm-1 day-column">
              <h3 className="dayName text-center">Sunday</h3>
              <div className="date-container">1</div>
              <div className="date-container">2</div>
              <div className="date-container">3</div>
              <div className="date-container">4</div>
              <div className="date-container">5</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulerMonth;
