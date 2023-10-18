// import React from "react";
// import MyCalendar from "./MyCalendar";

// const Scheduler = () => {
//   return (
//     <>
//       <div className="container-fluid scheduler-container">
//         <div className="row">
//           <div className="col-sm-10 offset-sm-2">
//             <div className="row">
//               <div className="col-sm-2">
//                 <h2 className="GM-heading">Good Morning Doctor!</h2>
//                 <div className="appointment-container">
//                   <div className="row appointmentDetails p-3" tabindex="0">
//                     <h3 className="appointment-day text-center" tabindex="0">
//                       Appointments Today
//                     </h3>
//                     <h2 className="appointment-count text-center">1</h2>
//                     <h3 className="Consultations text-center">
//                       Consultations Scheduled
//                     </h3>
//                   </div>
//                   <div className="row appointmentDetails p-3" tabindex="0">
//                     <h3 className="appointment-day text-center">
//                       Appointments Tomorrow
//                     </h3>
//                     <h2 className="appointment-count text-center">0</h2>
//                     <h3 className="Consultations text-center">
//                       Consultations Scheduled
//                     </h3>
//                   </div>
//                   <div className="row appointmentDetails p-3" tabindex="0">
//                     <h3 className="appointment-day text-center">
//                       Appointments on Friday
//                     </h3>
//                     <h2 className="appointment-count text-center">6</h2>
//                     <h3 className="Consultations text-center">
//                       Consultations Scheduled
//                     </h3>
//                   </div>
//                   <div className="row">
//                     <button type="button" class="btn viewAll-button mx-auto">
//                       View All
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-sm-10">
//                 <MyCalendar />
//                 <div className="row d-flex justify-content-end mt-2">
//                   <div className="col-sm-auto freeslot"></div>
//                   <p className="col-sm-auto">Free Slot</p>
//                   <div className="col-sm-auto booked"></div>
//                   <p className="col-sm-auto">Booked</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Scheduler;

"use client";
import React, { useState } from "react";
import MyCalendar from "./MyCalendar";

const Scheduler = () => {
  // console.log(props, "this is props");
  const [numberAcceptedToday, setNumberAcceptedToday] = useState(12);
  const [numberAcceptedTomorrow, setNumberAcceptedTomorrow] = useState(12);
  const [numberAcceptedDayAfterTomorrow, setNumberAcceptedDayAfterTomorrow] =
    useState(12);
  return (
    <>
      <div className="container-fluid scheduler-container">
        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <div className="row">
              <div className="col-sm-2">
                <h2 className="GM-heading">Good Morning Doctor!</h2>
                <div className="appointment-container">
                  <div className="row appointmentDetails p-3 m-2" tabindex="0">
                    <h3 className="appointment-day text-center" tabindex="0">
                      Appointments Today
                    </h3>
                    <h2 className="appointment-count text-center">
                      {numberAcceptedToday}
                    </h2>
                    <h3 className="Consultations text-center">
                      Consultations Scheduled
                    </h3>
                  </div>
                  <div className="row appointmentDetails p-3 m-2" tabindex="0">
                    <h3 className="appointment-day text-center">
                      Appointments Tomorrow
                    </h3>
                    <h2 className="appointment-count text-center">
                      {numberAcceptedTomorrow}
                    </h2>
                    <h3 className="Consultations text-center">
                      Consultations Scheduled
                    </h3>
                  </div>
                  <div className="row appointmentDetails p-3 m-2" tabindex="0">
                    <h3 className="appointment-day text-center">
                      Appointments on Day After Tomorrow
                    </h3>
                    <h2 className="appointment-count text-center">
                      {numberAcceptedDayAfterTomorrow}
                    </h2>
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
                <MyCalendar
                  setNumberAcceptedToday={setNumberAcceptedToday}
                  setNumberAcceptedTomorrow={setNumberAcceptedTomorrow}
                  setNumberAcceptedDayAfterTomorrow={
                    setNumberAcceptedDayAfterTomorrow
                  }
                />
                <div className="row d-flex justify-content-end mt-2">
                  <div className="col-sm-auto freeslot"></div>
                  <p className="col-sm-auto">Free Slot</p>
                  <div className="col-sm-auto booked"></div>
                  <p className="col-sm-auto">Booked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scheduler;
