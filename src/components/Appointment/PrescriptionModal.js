import React from "react";
import "./prescriptionModal.css";
import Image from "next/image";
import img1 from "../../../public/image/cancer_unwired_logo.png";
import Modal from "react-bootstrap/Modal";

const PrescriptionModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} dialogClassName="custom-modal-width">
      <Modal.Header className="custom-modal-header">
        <div className="row">
          <div className="col-sm-8">
            <Image className="headerImage1" src={img1} alt="header" />
          </div>
          <div className="col-sm-4">
            <p className="purple-content mb-1 fw-semibold text-end">
              {" "}
              Dr. Sandeep Nayak
            </p>
            <p className="purple-content fs-6 mb-0 text-end">
              Dept. of Oncology
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <p className="purple-content mb-1 fw-semibold">Cancer Hospital</p>
            <p className="black-content mb-1">
              Mahalaxmi Ind.estate, D.shivner Marg, Delisle Road
            </p>
            <p className="black-content mb-1">+91 - 994954985/ 033-965219652</p>
            <p className="black-content mb-0">
              <a class="link-opacity-100" href="#">
                www.cancerhospital.com
              </a>
            </p>
          </div>
          <div className="col-sm-5">
            <p className="black-content text-end mb-1">MD license: 12-136547</p>
            <p className="black-content text-end mb-1">Doctor ID: 12-136547</p>
            <p className="black-content mb-1 text-end">
              +91 - 994954985/ 033-965219652
            </p>
            <p className="black-content text-end fw-medium mb-0">
              24th June, 2023
            </p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form className="row g-3">
          <div className="col-md-2 mt-0">
            <label
              htmlFor="inputId"
              className="form-label purple-content-2 fw-medium mb-1"
            >
              Id
            </label>
            <input
              type="text"
              className="form-control custom-form-control"
              id="inputId"
            />
          </div>
          <div className="col-md-3 mt-0">
            <label
              htmlFor="inputName"
              className="form-label  purple-content-2 fw-medium mb-1"
            >
              Name
            </label>
            <input
              type="name"
              className="form-control custom-form-control"
              id="inputName"
            />
          </div>
          <div className="col-md-3 mt-0">
            <label
              htmlFor="inputEmail"
              className="form-label  purple-content-2 fw-medium mb-1"
            >
              Email
            </label>
            <input
              type="mail"
              className="form-control custom-form-control"
              id="inputEmail"
            />
          </div>
          <div className="col-md-2 mt-0">
            <label
              htmlFor="inputEmail"
              className="form-label  purple-content-2 fw-medium mb-1"
            >
              Sex
            </label>
            <input
              type="mail"
              className="form-control custom-form-control"
              id="inputEmail"
            />
          </div>
          <div className="col-md-2 mt-0">
            <label
              htmlFor="inputEmail"
              className="form-label  purple-content-2 fw-medium mb-1"
            >
              Age
            </label>
            <input
              type="mail"
              className="form-control custom-form-control"
              id="inputEmail"
            />
          </div>
          <div className="col-md-6 mt-0">
            <label
              htmlFor="inputEmail"
              className="form-label  purple-content-2 fw-medium mb-1"
            >
              Address
            </label>
            <input
              type="mail"
              className="form-control custom-form-control"
              id="inputEmail"
            />
          </div>
          <div className="col-md-3 mt-0">
            <label
              htmlFor="inputEmail"
              className="form-label  purple-content-2 fw-medium mb-1"
            >
              Consultation Id
            </label>
            <input
              type="mail"
              className="form-control custom-form-control"
              id="inputEmail"
            />
          </div>
          <div className="col-md-3 mt-0">
            <label
              htmlFor="inputEmail"
              className="form-label  purple-content-2 fw-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="mail"
              className="form-control custom-form-control"
              id="inputEmail"
            />
          </div>
          <div className="col-sm-6 mt-0">
            <div className="row">
              <div className="col-sm-3">
                <label
                  htmlFor="inputEmail"
                  className="form-label purple-content-2 fw-medium mb-1"
                >
                  Height
                </label>
                <input
                  type="mail"
                  className="form-control custom-form-control"
                  id="inputEmail"
                />
              </div>
              <div className="col-sm-3">
                <label
                  htmlFor="inputEmail"
                  className="form-label purple-content-2 fw-medium mb-1"
                >
                  Weight
                </label>
                <input
                  type="mail"
                  className="form-control custom-form-control"
                  id="inputEmail"
                />
              </div>
              <div className="col-sm-3">
                <label
                  htmlFor="inputEmail"
                  className="form-label purple-content-2 fw-medium mb-1"
                >
                  Rate
                </label>
                <input
                  type="mail"
                  className="form-control custom-form-control"
                  id="inputEmail"
                />
              </div>
              <div className="col-sm-3">
                <label
                  htmlFor="inputEmail"
                  className="form-label purple-content-2 fw-medium mb-1"
                >
                  Temp
                </label>
                <input
                  type="mail"
                  className="form-control custom-form-control"
                  id="inputEmail"
                />
              </div>
            </div>
          </div>

          <div className="input-group mb-0">
            <span className="input-group-text purple-content" id="basic-addon1">
              Current Diagnosis
            </span>
            <input
              type="text"
              className="form-control custom-form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-0 mt-2">
            <span className="input-group-text purple-content" id="basic-addon1">
              Known Diagnosis
            </span>
            <input
              type="text"
              className="form-control custom-form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="border p-2">
            <div className="border p-3">
              <table className="table">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="purple-content mb-0 table-header-cell"
                    >
                      Sno.
                    </th>
                    <th scope="col" className="purple-content mb-0 text-center">
                      Medication
                    </th>
                    <th scope="col" className="purple-content mb-0 text-center">
                      Dose Strength
                    </th>
                    <th scope="col" className="purple-content mb-0 text-center">
                      Dose Form
                    </th>
                    <th scope="col" className="purple-content mb-0">
                      Route
                    </th>
                    <th scope="col" className="purple-content mb-0">
                      Frequency
                    </th>
                    <th scope="col" className="purple-content mb-0 text-center">
                      Duration (Days)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="fw-normal text-center">
                      1
                    </th>
                    <td>Lorem ipsum dolor sit amet,</td>
                    <td className="text-center">500 mg</td>
                    <td className="text-center">Tablet</td>
                    <td className="text-center">Oral</td>
                    <td className="text-center">0-1-1</td>
                    <td className="text-center">30</td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-normal text-center">
                      2
                    </th>
                    <td>Lorem ipsum dolor sit amet,</td>
                    <td className="text-center">500 mg</td>
                    <td className="text-center">Tablet</td>
                    <td className="text-center">Injection</td>
                    <td className="text-center">IV</td>
                    <td className="text-center">60</td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-normal text-center">
                      3
                    </th>
                    <td>Lorem ipsum dolor sit amet,</td>
                    <td className="text-center">500 mg</td>
                    <td className="text-center">Tablet</td>
                    <td className="text-center">IV</td>
                    <td className="text-center">1-1-1</td>
                    <td className="text-center">60</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style={{ height: "100px" }}
            />
            <label
              htmlFor="floatingTextarea"
              className="black-content fw-semibold"
            >
              Special Instructions
            </label>
          </div>

          <div className="input-group mb-0 mt-2">
            <span className="input-group-text purple-content" id="basic-addon1">
              Follow-up Appointment
            </span>
            <input
              type="text"
              className="form-control custom-form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="border p-3">
            <div className="row">
              <div className="col-sm-9">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    style={{ height: "70px" }}
                  />
                  <label htmlFor="floatingTextarea" className="fw-light">
                    Remarks
                  </label>
                </div>
              </div>
              <div className="col-sm-3 border">
                <p className="purple-signature">Digital Signature</p>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default PrescriptionModal;
