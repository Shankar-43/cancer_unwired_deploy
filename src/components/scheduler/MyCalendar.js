// "use client";
// import React, { useEffect, useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import EventDetailModal from "../../components/scheduler/EventDetailModal";
// import CreateEventModal from "../../components/scheduler/CreateEventModal";
// import Swal from "sweetalert2";
// import Scheduler from "./Scheduler";

// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//   const [events, setEvents] = useState([]);
//   const [currentDate, setCurrentDate] = useState(moment());
//   const [currentView, setCurrentView] = useState("month");

//   const [busySlots, setBusySlots] = useState(null);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showCreateEventModal, setShowCreateEventModal] = useState(false);

//   const handleSelectSlot = (slotInfo) => {
//     const clickedDate = new Date(slotInfo.start);
//     const currentDate = new Date();
//     // Set the time part of currentDate to 00:00:00 to compare only dates
//     currentDate.setHours(0, 0, 0, 0);
//     if (clickedDate >= currentDate) {
//       setShowCreateEventModal(true);
//       setSelectedDate(slotInfo);
//     } else {
//       Swal.fire({
//         title: "Error",
//         text: "Please select a present or future date.",
//         // icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   useEffect(() => {
//     const fetchTestData = async () => {
//       try {
//         const response = await fetch("http://localhost:8001/get-all-slots");
//         const testData = await response.json();
//         console.log("result: ", testData);
//         const result = testData.eventDetails;
//         console.log("result: ", result);
//         setBusySlots(result);
//         console.log("the result in the doctors calendar is ", result);
//       } catch (error) {
//         console.error("Error fetching test data:", error);
//       }
//     };

//     fetchTestData();
//   }, []);

//   const busyEventSlots = busySlots?.map((busy) => ({
//     ...busy,
//     title: busy.summary,
//     start: new Date(busy.start.dateTime),
//     end: new Date(busy.end.dateTime),
//   }));
//   console.log("busy slot", busyEventSlots);

//   const handleView = (view) => {
//     setCurrentView(view);
//   };

//   // const handleToday = () => {
//   //   setCurrentDate(moment());
//   // };

//   const handleNavigate = (date, view) => {
//     setCurrentDate(moment(date));
//   };

//   // Function to handle opening the modal and setting the selected event
//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//     setShowModal(true);
//   };
//   // Function to handle closing the modal

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setShowCreateEventModal(false);
//   };

//   // Calculate today, tomorrow, and the day after tomorrow
//   const today = moment().startOf("day");
//   const tomorrow = moment().add(1, "days").startOf("day");
//   const dayAfterTomorrow = moment().add(2, "days").startOf("day");

//   // Check if busyEventSlots is defined and not null
//   if (busyEventSlots) {
//     // Filter today's events
//     const todayEvents = busyEventSlots.filter(
//       (event) =>
//         moment(event.start).isSame(today, "day") &&
//         event.extendedProperties &&
//         event.extendedProperties.private &&
//         event.extendedProperties.private.status === "accepted"
//     );

//     // Filter tomorrow's events
//     const tomorrowEvents = busyEventSlots.filter(
//       (event) =>
//         moment(event.start).isSame(tomorrow, "day") &&
//         event.extendedProperties &&
//         event.extendedProperties.private &&
//         event.extendedProperties.private.status === "accepted"
//     );

//     // Filter the day after tomorrow's events
//     const dayAfterTomorrowEvents = busyEventSlots.filter(
//       (event) =>
//         moment(event.start).isSame(dayAfterTomorrow, "day") &&
//         event.extendedProperties &&
//         event.extendedProperties.private &&
//         event.extendedProperties.private.status === "accepted"
//     );

//     // Count the number of accepted events for each day
//     const numAcceptedToday = todayEvents.length;
//     const numAcceptedTomorrow = tomorrowEvents.length;
//     const numAcceptedDayAfterTomorrow = dayAfterTomorrowEvents.length;

//     console.log("today", numAcceptedToday);
//     console.log("tomorrow", numAcceptedTomorrow);
//     console.log("day After Tomorrow", numAcceptedDayAfterTomorrow);
//   }

//   const eventStyleGetter = (event, start, end, isSelected) => {
//     let backgroundColor = "";
//     if (event.extendedProperties && event.extendedProperties.private) {
//       const { status } = event?.extendedProperties?.private;
//       if (status === "declined") {
//         backgroundColor = "#223645";
//       } else if (status === "accepted") {
//         backgroundColor = "#F8BF2A";
//       }
//     }
//     return {
//       style: {
//         backgroundColor,
//       },
//     };
//   };

//   return (
//     <>
//     {/* <Scheduler /> */}
//       <div>
//         <div style={{ height: 810 }}>
//           <Calendar
//             localizer={localizer}
//             events={busyEventSlots}
//             // events={events}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: "100%" }}
//             views={["month", "week", "day", "agenda"]}
//             view={currentView}
//             onView={handleView}
//             date={currentDate.toDate()}
//             onNavigate={handleNavigate}
//             // onSelectSlot={handleToday}
//             onSelectEvent={(event) => handleEventClick(event)}
//             onSelectSlot={handleSelectSlot}
//             selectable
//             popup
//             eventPropGetter={eventStyleGetter}
//           />
//         </div>

//         {/* Modal for displaying event details */}

//         <EventDetailModal
//           show={showModal}
//           event={selectedEvent}
//           onClose={handleCloseModal}
//         />

//         <CreateEventModal
//           show={showCreateEventModal}
//           slot={selectedDate}
//           onClose={handleCloseModal}
//         />
//       </div>
//     </>
//   );
// };

// export default MyCalendar;

"use client";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import EventDetailModal from "../../components/scheduler/EventDetailModal";
import CreateEventModal from "../../components/scheduler/CreateEventModal";
import Swal from "sweetalert2";
import Scheduler from "./Scheduler";

const localizer = momentLocalizer(moment);

const MyCalendar = ({
  setNumberAcceptedToday,
  setNumberAcceptedTomorrow,
  setNumberAcceptedDayAfterTomorrow,
}) => {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());
  const [currentView, setCurrentView] = useState("month");

  const [busySlots, setBusySlots] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  const handleSelectSlot = (slotInfo) => {
    const clickedDate = new Date(slotInfo.start);
    const currentDate = new Date();
    // Set the time part of currentDate to 00:00:00 to compare only dates
    currentDate.setHours(0, 0, 0, 0);
    if (clickedDate >= currentDate) {
      setShowCreateEventModal(true);
      setSelectedDate(slotInfo);
    } else {
      Swal.fire({
        title: "Error",
        text: "Please select a present or future date.",
        // icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await fetch("http://localhost:8001/get-all-slots");
        const testData = await response.json();
        console.log("result: ", testData);
        const result = testData.eventDetails;
        console.log("result: ", result);
        setBusySlots(result);
        console.log("the result in the doctors calendar is ", result);
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };

    fetchTestData();
  }, []);

  const busyEventSlots = busySlots?.map((busy) => ({
    ...busy,
    title: busy.summary,
    start: new Date(busy.start.dateTime),
    end: new Date(busy.end.dateTime),
  }));
  console.log("busy slot", busyEventSlots);

  const handleView = (view) => {
    setCurrentView(view);
  };

  // const handleToday = () => {
  //   setCurrentDate(moment());
  // };

  const handleNavigate = (date, view) => {
    setCurrentDate(moment(date));
  };

  // Function to handle opening the modal and setting the selected event
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };
  // Function to handle closing the modal

  const handleCloseModal = () => {
    setShowModal(false);
    setShowCreateEventModal(false);
  };

  // Calculate today, tomorrow, and the day after tomorrow
  const today = moment().startOf("day");
  const tomorrow = moment().add(1, "days").startOf("day");
  const dayAfterTomorrow = moment().add(2, "days").startOf("day");

  // Check if busyEventSlots is defined and not null
  if (busyEventSlots) {
    // Filter today's events
    const todayEvents = busyEventSlots.filter(
      (event) =>
        moment(event.start).isSame(today, "day") &&
        event.extendedProperties &&
        event.extendedProperties.private &&
        event.extendedProperties.private.status === "accepted"
    );

    // Filter tomorrow's events
    const tomorrowEvents = busyEventSlots.filter(
      (event) =>
        moment(event.start).isSame(tomorrow, "day") &&
        event.extendedProperties &&
        event.extendedProperties.private &&
        event.extendedProperties.private.status === "accepted"
    );

    // Filter the day after tomorrow's events
    const dayAfterTomorrowEvents = busyEventSlots.filter(
      (event) =>
        moment(event.start).isSame(dayAfterTomorrow, "day") &&
        event.extendedProperties &&
        event.extendedProperties.private &&
        event.extendedProperties.private.status === "accepted"
    );

    // Count the number of accepted events for each day
    const numAcceptedToday = todayEvents.length;
    const numAcceptedTomorrow = tomorrowEvents.length;
    const numAcceptedDayAfterTomorrow = dayAfterTomorrowEvents.length;
    // <Scheduler
    //   numAcceptedToday={numAcceptedToday}
    //   numAcceptedTomorrow={numAcceptedTomorrow}
    //   numAcceptedDayAfterTomorrow={numAcceptedDayAfterTomorrow}
    // />;
    setNumberAcceptedToday(numAcceptedToday);
    setNumberAcceptedTomorrow(numAcceptedTomorrow);
    setNumberAcceptedDayAfterTomorrow(numAcceptedDayAfterTomorrow);

    console.log("today", numAcceptedToday);
    console.log("tomorrow", numAcceptedTomorrow);
    console.log("day After Tomorrow", numAcceptedDayAfterTomorrow);
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = "";
    if (event.extendedProperties && event.extendedProperties.private) {
      const { status } = event?.extendedProperties?.private;
      if (status === "declined") {
        backgroundColor = "#223645";
      } else if (status === "accepted") {
        backgroundColor = "#F8BF2A";
      }
    }
    return {
      style: {
        backgroundColor,
      },
    };
  };

  return (
    <>
      <div>
        <div style={{ height: 810 }}>
          <Calendar
            localizer={localizer}
            events={busyEventSlots}
            // events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%" }}
            views={["month", "week", "day", "agenda"]}
            view={currentView}
            onView={handleView}
            date={currentDate.toDate()}
            onNavigate={handleNavigate}
            // onSelectSlot={handleToday}
            onSelectEvent={(event) => handleEventClick(event)}
            onSelectSlot={handleSelectSlot}
            selectable
            popup
            eventPropGetter={eventStyleGetter}
          />
        </div>

        {/* Modal for displaying event details */}

        <EventDetailModal
          show={showModal}
          event={selectedEvent}
          onClose={handleCloseModal}
        />

        <CreateEventModal
          show={showCreateEventModal}
          slot={selectedDate}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default MyCalendar;
