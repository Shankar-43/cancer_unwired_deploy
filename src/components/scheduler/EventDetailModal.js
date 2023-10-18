import React from "react";
import { Modal, Button } from "react-bootstrap";

const EventDetailModal = ({ show, isOpen, event, onClose }) => {
  const formattedStartDate = event?.start.toLocaleString();
  const formattedEndDate = event?.end.toLocaleString();
  console.log(event);
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Appointment Details</Modal.Title>
        <p style={{ margin: "5px 0px 0px 10px" }}>
          ({formattedStartDate?.split(",")[0]})
        </p>
      </Modal.Header>
      <Modal.Body>
        <p className=" d-flex align-baseline">
          <h5>Title</h5>: {event?.title}
        </p>
        <p className=" d-flex align-baseline">
          <h5>Description</h5>: {event?.description}
        </p>
        <p className=" d-flex align-baseline">
          <h5>Start Time</h5>: {formattedStartDate?.split(",")[1]}
        </p>
        <p className=" d-flex align-baseline">
          <h5>End Time</h5>: {formattedEndDate?.split(",")[1]}
        </p>
        {/* <p>Time: {event?.end.dateTime.split('T')[1]}</p>/ */}
        {/* <p>Date: {event?.title}</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventDetailModal;
