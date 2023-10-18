"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaUserMd } from "react-icons/fa";
import { SiTimescale } from "react-icons/si";
import ISO6391 from "iso-639-1";
import { useSession } from "next-auth/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./profileSetting.css";
import { timezones } from "./db";
import TagsInput from "react-tagsinput";

const animatedComponents = makeAnimated();
const Doctor_dashboard = () => {
  const { data: session } = useSession();
  const emailId = session?.user?.email;
  console.log(emailId, "this sis the session");
  const languageData = ISO6391.getLanguages(ISO6391.getAllCodes());

  const handleChange = (selectedOption) => {
    setUserDetails({ ...userDetails, language: selectedOption.value });
  };

  const options = languageData.map((language) => ({
    value: language.code,
    label: language.name,
  }));

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    language: "",
    summary: "",
    practicingHospital: "",
    memberCode: "",
    department: "",
    qualifications: "",
    timezone: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    topic: "",
    expertise: [],
  });
  const {
    name,
    email,
    phone,
    address,
    language,
    summary,
    practicingHospital,
    memberCode,
    department,
    qualifications,
    timezone,
    twitter,
    facebook,
    linkedin,
    instagram,
    topic,
  } = userDetails;

  useEffect(() => {
    async function fetching() {
      if (emailId) {
        await fetch(`${process.env.NEXT_PUBLIC_CU_GET_DOCTOR_DATA}/${emailId}/`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data, "this is teh response");
            setUserDetails(data.user_data);
          })
          .catch((error) => {
            console.log(error);
            return;
          });
      }
    }
    fetching();
  }, [emailId]);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "2px solid white" : "1px solid white",
      boxShadow: state.isFocused ? "0 0 3px white" : "white",
      borderColor: state.isFocused ? "white" : "white",
      ":hover": {
        borderColor: "white", // Text color on option hover
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
      width: "80%",
      borderRadius: "15px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#9426b2" : "white", // Background color on hover
      color: state.isFocused ? "white" : "#333", // Text color on hover
      ":hover": {
        backgroundColor: "#9426b2", // Background color on option hover
        color: "white", // Text color on option hover
      },
      borderRadius: "5px",
    }),
  };

  console.log(userDetails, "this is the userDetails");
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-sm-5 offset-sm-2">
          <h5 className="head-all mt-5">Personal Details</h5>
          <form>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="label-col">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="custom-input-group">
                    <label htmlFor="email" className="label-col">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="custom-input-group">
                    <label htmlFor="email" className="label-col">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control custom-input"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      value={phone}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="address" className="label-col">
                  Address
                </label>
                <textarea
                  className="form-control custom-input-a"
                  id="address"
                  name="address"
                  rows="4"
                  placeholder="Enter your address"
                  required
                  value={address}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, address: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-input-group">
                <label
                  htmlFor="language"
                  className="label-col custom-label-col"
                >
                  Language Knows
                </label>
                <Select
                  className="form-control custom-input-l"
                  id="language"
                  name="language"
                  required
                  isMulti
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  value={options.find(
                    (option) => option.value === userDetails.language
                  )}
                  onChange={handleChange}
                  options={options}
                  styles={customStyles}
                  placeholder="Select your preferred language"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="summary" className="head-all">
                Summary
              </label>
              <div className="custom-input-group">
                <textarea
                  className="form-control summary-input"
                  id="summary"
                  name="summary"
                  rows="8"
                  placeholder="Write a summary about yourself"
                  value={summary}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, summary: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <h4 className="head-all">Professional Details</h4>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="label-col">
                  Practicing Hospital
                </label>
                <input
                  type="text"
                  className="form-control custom-inpu-p"
                  id="practicing"
                  name="practicing"
                  placeholder="Enter practicing hospital"
                  required
                  value={practicingHospital}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      practicingHospital: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="custom-input-group">
                    <label htmlFor="email" className="label-col">
                      Member Code
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input-m"
                      id="member"
                      name="member"
                      placeholder="Enter member code"
                      required
                      value={memberCode}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          memberCode: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="custom-input-group">
                    <label htmlFor="email" className="label-col">
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input-d"
                      id="department"
                      name="department"
                      placeholder="Enter department"
                      required
                      value={department}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          department: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="address" className="label-col">
                  Qualifications
                </label>
                <textarea
                  className="form-control custom-input-q"
                  id="qualifications"
                  name="qualifications"
                  placeholder="Enter qualifications"
                  required
                  value={qualifications}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      qualifications: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
            <button type="button" className="btn btn-save">
              Save Changes
            </button>
            {/* <!-- Modal --> */}
          </form>
        </div>

        <div className="col-sm-5 box-shadow-col">
          <div
            className="modal fade"
            id="exampleModal"
             tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-width modal-lg">
              <div className="modal-content modal-box">
                <div className="row">
                  <div className="col-sm-10">
                    <h1
                      className="modal-title fs-5 mx-3 mt-2 upload-box"
                      id="exampleModalLabel"
                    >
                      Upload Article
                      <span className="modal-box-collapse mx-2">
                        Only.word format is supported
                      </span>
                    </h1>
                  </div>
                  <div className="col-sm-2">
                    <button
                      type="button"
                      className="btn btn-close"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="modal-1-box">
                    <div className="form-group">
                      <label
                        id="fileAttachLabelbox"
                        for="fileInput"
                        className="mt-3"
                      >
                        Browse more Files
                      </label>
                      <input type="file" id="fileInput" />
                    </div>
                    <div className="mt-5">
                      <span className="file-box mx-3 alert">
                        <i
                          className="fa fa-file fa-color"
                          aria-hidden="true"
                        ></i>
                        <span>Article.word</span>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                        >
                          <span className="close-btn-file">&times;</span>
                        </button>
                      </span>
                      {/* <!-- <button type="button" className="close" data-dismiss="alert"><span className="close-btn-file">&times;</span></button> --> */}
                      <span className="file-box alert">
                        <i
                          className="fa fa-file fa-color"
                          aria-hidden="true"
                        ></i>
                        <span>Article.word</span>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span className="close-btn-file">&times;</span>
                        </button>
                      </span>
                      {/* <!-- <button type="button" className="close" data-dismiss="alert"><span className="close-btn-file">&times;</span></button> --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- <div className="modal-header"> --> */}
                <h1
                  className="modal-title fs-5 mx-3 upload-box"
                  id="exampleModalLabel"
                >
                  Upload Image (optional)
                  <span className="modal-box-collapse mx-2">
                    Only jpeg or png format is supported
                  </span>
                </h1>
                {/* <!-- <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                          <!-- </div> --> */}
                <div className="modal-body">
                  <div className="modal-1-box">
                    <label
                      id="fileAttachLabelbox"
                      for="fileInput"
                      className="mt-3"
                    >
                      Browse more Files
                    </label>
                    <input type="file" id="fileInput" />
                    <p id="dragAndDropbox" className="droparea">
                      or Drag and Drop Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <button type="button" className="btn btn-view mt-2 mx-3">Patient View</button> --> */}
          <form>
            <h5 className="head-all mt-2">Professional Certificates</h5>
            <div className="row">
              <div className="col-sm-5">
                <div className="view-1 mt-2">
                  <span className="mx-2 cer-v">Certificate 1</span>
                  <span>
                    <button className="btn flow-v mx-1" type="button">
                      View
                    </button>
                  </span>
                </div>
                <div className="view-1 mt-2">
                  <span className="mx-2 cer-v">Certificate 1</span>
                  <span>
                    <button className="btn flow-v mx-1" type="button">
                      View
                    </button>
                  </span>
                </div>
                <div className="view-1 mt-2">
                  <span className="mx-2 cer-v">Certificate 1</span>
                  <span>
                    <button className="btn flow-v mx-1" type="button">
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-sm-7">
                <div id="dropArea" className="mb-3">
                  <label id="fileAttachLabel" for="fileInput">
                    Attach Certificate
                  </label>
                  <input type="file" id="fileInput" />
                  <p id="dragAndDropLabel">or Drag and Drop Here</p>
                </div>
              </div>
            </div>
            <h5 className="head-all">Timezone</h5>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="custom-label-col ">
                  &nbsp;
                  <SiTimescale size={23} color={"#9426B2"} />
                  &nbsp; Timezone
                </label>
                <Select
                  className="form-control custom-input-l"
                  id="language"
                  name="language"
                  required
                  isMulti
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  value={timezone}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, timezone: e.target.value })
                  }
                  options={timezones.map((timezone) => ({
                    value: timezone,
                    label: timezone,
                  }))}
                  styles={customStyles}
                  placeholder="Select your preferred language"
                />
              </div>
              {/* <!-- <span className="cer-v mx-2">UTC/GMT +8 hours</span> --> */}
            </div>
            <h5 className="head-all">Doctor Expertise</h5>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="label-col ">
                  &nbsp;
                  <FaUserMd size={23} color={"#9426B2"} />
                  &nbsp; Expertise
                </label>
                <TagsInput
                  value={userDetails.expertise} // Assuming expertise is an array of tags
                  onChange={(expert) =>
                    setUserDetails({ ...userDetails, expertise: expert })
                  }
                  className="form-control custom-input-tw"
                  placeholder="Enter your areas of expertise"
                  required
                />
                <span className="save-btn">
                  <button className="btn btn-save-btn" type="button">
                    save
                  </button>
                </span>
              </div>
            </div>

            <h5 className="head-all">Social Links</h5>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="label-col ">
                  &nbsp;
                  <BsTwitter size={23} color={"#9426B2"} />
                  &nbsp; Twitter
                </label>
                <input
                  type="text"
                  className="form-control custom-input-tw"
                  id="twitter"
                  name="twitter"
                  placeholder="Enter Twitter profile URL"
                  required
                  value={twitter}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, twitter: e.target.value })
                  }
                />
                <span className="save-btn">
                  {" "}
                  <button className="btn btn-save-btn" type="button">
                    save
                  </button>
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="label-col">
                  &nbsp;
                  <FaFacebookF size={23} color="#9426B2" />
                  Facebook
                </label>
                <input
                  type="text"
                  className="form-control custom-input-you"
                  id="facebook"
                  name="facebook"
                  placeholder="Enter Facebook profile URL"
                  required
                  value={facebook}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, facebook: e.target.value })
                  }
                />
                <span className="save-btn">
                  {" "}
                  <button className="btn btn-save-btn" type="button">
                    save
                  </button>
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="label-col">
                  &nbsp;
                  <FaLinkedinIn size={23} color="#9426B2" />
                  &nbsp; LinkedIn
                </label>
                <input
                  type="text"
                  className="form-control custom-input-link"
                  id="linkedin"
                  name="linkedin"
                  placeholder="Enter LinkedIn profile URL"
                  required
                  value={linkedin}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, linkedin: e.target.value })
                  }
                />
                <span className="save-btn">
                  {" "}
                  <button className="btn btn-save-btn" type="button">
                    save
                  </button>
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="label-col">
                  &nbsp;
                  <BsInstagram size={23} color="#9426B2" />
                  &nbsp; Instagram
                </label>
                <input
                  type="text"
                  className="form-control custom-input-ins"
                  id="instagram"
                  name="instagram"
                  placeholder="Enter Instagram profile URL"
                  required
                  value={instagram}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      instagram: e.target.value,
                    })
                  }
                />
                <span className="save-btn">
                  <button className="btn btn-save-btn" type="button">
                    save
                  </button>
                </span>
              </div>
            </div>
            <h5 className="head-all">Blogs or Articles</h5>
            <div className="form-group">
              <div className="custom-input-group">
                <label htmlFor="name" className="label-col mx-2">
                  Topic
                </label>
                <input
                  type="text"
                  className="form-control custom-input-top"
                  id="topic"
                  name="topic"
                  placeholder="Enter blog/article topic"
                  required
                  value={topic}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, topic: e.target.value })
                  }
                />
                <span className="save-btn">
                  <button className="btn btn-save-btn" type="button">
                    Submit
                  </button>
                </span>
              </div>
            </div>

            <button
              className="btn blog-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + Add Article/Blog
            </button>

            {/* <!-- <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
              </button> -->
              <!-- <button type="button" className="btn blog-btn" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
              </button> --> */}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Doctor_dashboard;
