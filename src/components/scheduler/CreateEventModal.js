// "use client";
// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import eventService from "../../services/eventService";
// import formatDate from "../../assets/helperFunctions";
// import Swal from "sweetalert2";
// import { fetchTestData } from "./db";

// const CreateEventSlot = ({ show, slot, onClose }) => {
//   const [eventData, setEventData] = useState({
//     summary: "",
//     location: "",
//     description: "",
//     startTime: "",
//     endTime: "",
//   });

//   const formattedStartDateTime = formatDate(slot?.start);
//   const selectedDate1 = formattedStartDateTime?.dateTime.split("T")[0];
//   const formattedEndDateTime = formatDate(slot?.end);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setEventData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Define a validation function
//   const isFormValid = () => {
//     const { summary, startTime, endTime, location, description } = eventData;
//     return summary && startTime && endTime && location && description;
//   };

//   const handleSubmit = async () => {
//     if (!isFormValid()) {
//       Swal.fire({
//         text: "Please fill in all required fields.",
//         confirmButtonText: "OK",
//       });
//       return;
//     }

//     const selectedDate = formattedStartDateTime?.dateTime.split("T")[0];
//     const formattedStartTime = eventData?.startTime;
//     const formattedEndTime = eventData?.endTime;

//     // Combine selected date with formatted start and end times
//     const combinedStartDateTime = new Date(
//       `${selectedDate}T${formattedStartTime}`
//     );

//     const combinedEndDateTime = new Date(`${selectedDate}T${formattedEndTime}`);
//     const formattedStart = combinedStartDateTime?.toISOString();
//     const formattedEnd = combinedEndDateTime?.toISOString();
//     const realStart = formatDate(formattedStart);
//     const realEnd = formatDate(formattedEnd);

//     const event = {
//       ...eventData,
//       start: realStart,
//       end: realEnd,

//       // attendees: [
//       //   {
//       //     email: 'attendee1@example.com',
//       //     responseStatus: 'declined', // Indicates the attendee has accepted the invitation
//       //   },
//       // ],

//       extendedProperties: {
//         private: {
//           status: "declined",
//         },
//       },
//       // transparency: 'opaque',
//     };

//     // setTimeout(() => {
//     //   window.location.reload();
//     // }, 1000);
//     try {
//       const result = await eventService.createSlot(event);
//       console.log("The declined slot created is ", result);

//       if (result === undefined) {
//         Swal.fire({
//           title: "Error",
//           text: "Please check the startTime and endTime",
//           confirmButtonText: "OK",
//         });
//       } else if (result.success) {
//         Swal.fire({
//           title: "Appointment Created Successfully!",
//           icon: "success",
//           confirmButtonText: "OK",
//         });

//         setEventData({
//           summary: "",
//           location: "",
//           description: "",
//           startTime: "",
//           endTime: "",
//         });

//         onClose();
//       } else {
//         Swal.fire({
//           title: "Error",
//           text:
//             result.errorMessage ||
//             "An error occurred while creating the appointment.",
//           confirmButtonText: "OK",
//         });
//       }
//     } catch (error) {
//       // Handle any errors that occur when creating the appointment.
//       // You can show an error message here if needed.
//       console.error("Error creating appointment:", error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={onClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Create Free Slot</Modal.Title>
//         <p style={{ margin: "5px 0px 0px 10px" }}>({selectedDate1})</p>
//       </Modal.Header>

//       <Modal.Body>
//         <form>
//           <div className="form-group">
//             <label>Summary</label>

//             <input
//               type="text"
//               name="summary"
//               required
//               // value={eventData.summary}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <label>Start Time</label>

//             <input
//               type="time"
//               name="startTime"
//               required
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <label>End Time</label>

//             <input
//               type="time"
//               name="endTime"
//               required
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <label>Location</label>

//             <input
//               type="text"
//               name="location"
//               required
//               value={eventData.location}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <label>Description</label>

//             <textarea
//               name="description"
//               required
//               value={eventData.description}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//         </form>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>
//           Close
//         </Button>

//         <Button variant="primary" onClick={handleSubmit}>
//           Create Free Slot
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default CreateEventSlot;

"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import eventService from "../../services/eventService";
import formatDate from "../../assets/helperFunctions";
import Swal from "sweetalert2";
import { fetchTestData } from "./db";

const CreateEventSlot = ({ show, slot, onClose }) => {
  const [eventData, setEventData] = useState({
    summary: "",
    location: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const formattedStartDateTime = formatDate(slot?.start);
  const selectedDate1 = formattedStartDateTime?.dateTime.split("T")[0];
  const formattedEndDateTime = formatDate(slot?.end);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add isSubmitting state

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Define a validation function
  const isFormValid = () => {
    const { summary, startTime, endTime, location, description } = eventData;
    return summary && startTime && endTime && location && description;
  };

  const handleSubmit = async () => {
    if (isSubmitting) {
      // If the form is already being submitted, don't allow another submission
      return;
    }

    if (!isFormValid()) {
      Swal.fire({
        text: "Please fill in all required fields.",
        confirmButtonText: "OK",
      });
      return;
    }

    const selectedDate = formattedStartDateTime?.dateTime.split("T")[0];
    const formattedStartTime = eventData?.startTime;
    const formattedEndTime = eventData?.endTime;

    // Combine selected date with formatted start and end times
    const combinedStartDateTime = new Date(
      `${selectedDate}T${formattedStartTime}`
    );

    const combinedEndDateTime = new Date(`${selectedDate}T${formattedEndTime}`);
    const formattedStart = combinedStartDateTime?.toISOString();
    const formattedEnd = combinedEndDateTime?.toISOString();
    const realStart = formatDate(formattedStart);
    const realEnd = formatDate(formattedEnd);

    const event = {
      ...eventData,
      start: realStart,
      end: realEnd,

      // attendees: [
      //   {
      //     email: 'attendee1@example.com',
      //     responseStatus: 'declined', // Indicates the attendee has accepted the invitation
      //   },
      // ],

      extendedProperties: {
        private: {
          status: "declined",
        },
      },
      // transparency: 'opaque',
    };

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
    setIsSubmitting(true);
    try {
      const result = await eventService.createSlot(event);
      console.log("The declined slot created is ", result);

      if (result === undefined) {
        Swal.fire({
          title: "Error",
          text: "Please check the startTime and endTime",
          confirmButtonText: "OK",
        });
      } else if (result.success) {
        Swal.fire({
          title: "Appointment Created Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        setEventData({
          summary: "",
          location: "",
          description: "",
          startTime: "",
          endTime: "",
        });

        onClose();
      } else {
        Swal.fire({
          title: "Error",
          text:
            result.errorMessage ||
            "An error occurred while creating the appointment.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      // Handle any errors that occur when creating the appointment.
      // You can show an error message here if needed.
      console.error("Error creating appointment:", error);
    } finally {
      // Set isSubmitting back to false after the submission is completed
      setIsSubmitting(false);
    }
  };

  // Clear the form data when the modal is hidden
  const handleExited = () => {
    setEventData({
      summary: "",
      location: "",
      description: "",
      startTime: "",
      endTime: "",
    });
  };

  return (
    <Modal show={show} onHide={onClose} onExited={handleExited}>
      <Modal.Header closeButton>
        <Modal.Title>Create Free Slot</Modal.Title>
        <p style={{ margin: "5px 0px 0px 10px" }}>({selectedDate1})</p>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-group">
            <label>Summary</label>

            <input
              type="text"
              name="summary"
              required
              // value={eventData.summary}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Start Time</label>

            <input
              type="time"
              name="startTime"
              required
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>End Time</label>

            <input
              type="time"
              name="endTime"
              required
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              required
              value={eventData.location}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              required
              value={eventData.description}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

        <Button variant="primary" onClick={handleSubmit}>
          Create Free Slot
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateEventSlot;
