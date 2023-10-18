"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import telInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { toast } from "react-toastify";
import { PiEyeDuotone, PiEyeClosedDuotone } from "react-icons/pi";

import img1 from "../../../public/doctorregister-img/Cancerunwiredreg.png";
import img2 from "../../../public/doctorregister-img/Onboarding.png";
import img3 from "../../../public/doctorregister-img/leftleaf.png";
import img4 from "../../../public/doctorregister-img/rightleaf.png";
import { useRouter } from "next/navigation";
import { updatePasswordStrength, validateForm } from "./db";

const Register = () => {
  const router = useRouter();
  var iti = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [buttonText, setButtonText] = useState("Register");
  const [passwordStrength, setPasswordStrength] = useState({
    text: "Password must be at least 8 characters",
    color: "black",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  useEffect(() => {
    const { text, color } = updatePasswordStrength(formData.password);
    setPasswordStrength({ text, color });
  }, [formData.password]);

  useEffect(() => {
    function intlPhone() {
      const phoneNumberInput = document.querySelector("#floatingInputPhone");
      iti.current = telInput(phoneNumberInput, {
        // any initialisation options go here
        initialCountry: "IN",
        autoPlaceholder: "aggressive",
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.21/js/utils.min.js",
        separateDialCode: true,
        formatOnDisplay: true,
      });
    }

    intlPhone();
  }, []);

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
    setPasswordStrength({
      text: "Password must be at least 8 characters",
      color: "black",
    });
  };

  const handleShowPassword = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation
    const { firstName, lastName, email, password, confirmPassword, role } =
      formData;

    const validationError = validateForm(formData);

    if (validationError) {
      toast.error(validationError);
      return;
    }
    setButtonText("Please wait...");

    const phoneNumber = document.querySelector("#floatingInputPhone").value;
    const selectedCountryData = iti.current.getSelectedCountryData();
    const countryCode = selectedCountryData.dialCode.replace(/\+/, "");
    // Prepare data for API request
    let data = {
      name: `${firstName.toLowerCase()} ${lastName.toLowerCase()}`,
      email: email,
      password,
      phone: countryCode + phoneNumber,
      user_role: role,
    };

    console.log("Data to be submitted:", data);

    // Perform API request here
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CU_REGISTER_API_ENDPOINT,
        requestOptions
      );
      const result = await response.json();
      console.log(result, "this is the result");
      if (result) {
        toast.success("User registration successful");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        toast.error("Email already exists");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Please try again later.");
    }
    setButtonText("Register");
    resetForm();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 custom-image-panel">
            <div>
              <Image className="right-logo" src={img1} alt="" />
            </div>

            <div>
              <p className="reg-heading mt-2">Welcome</p>
              <p className="landing-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="onboard">
              <Image className="img-fluid onboard-image" src={img2} alt="" />
            </div>
          </div>
          <div className="col-sm-8 top-d-r">
            <div className="reg-form-box">
              <div className="tabs-col">
                <div className="row">
                  <div className="col-sm-6 log-col">
                    <a href="./login" className="link-reg">
                      <h6 className="login-tab">Login</h6>
                    </a>
                  </div>
                  <div className="col-sm-6 reg-col">
                    <a href="./register" className="link-reg">
                      <h6 className="register-tab">Register</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group-box">
              <div className="para-left">
                <div className="row">
                  <div className="col-sm-6">
                    <p className="join-doc mt-4">Join 125,000+ Experts</p>
                  </div>
                  <div className="col-sm-5 mt-4">
                    <div className="col-box-r-d">
                      <select
                        className="form-select drop-d-r select-role"
                        aria-label="Default select example"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                      >
                        <option value="" defaultValue={"Select Role"}>
                          Select Role
                        </option>
                        <option value="doctor">Doctor</option>
                        <option value="researcher">Researcher</option>
                        <option value="influencer">Influencer</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr />
              </div>

              <div className="reg-left-leaf d-none d-lg-block">
                <Image className="reg-leftleaf-img" src={img3} alt="" />
              </div>
              <div className="reg-right-leaf d-none d-lg-block">
                <Image className="reg-rightleaf-img" src={img4} alt="" />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group form-d-r">
                  <div className="row">
                    <label htmlFor="firstName" className="form-all mb-1">
                      First Name
                    </label>

                    <div className="col-sm-6 p-col-right">
                      <input
                        type="text"
                        className="form-control name"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-sm-6 mb-2">
                      <input
                        type="text"
                        className="form-control name"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="phoneNumber" className="form-all mb-1">
                      Mobile Number and Email
                    </label>
                    <div>
                      <input
                        id="floatingInputPhone"
                        type="tel"
                        required="required"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="custom-input"
                      />
                    </div>
                  </div>
                  <input
                    type="email"
                    className="form-control email"
                    placeholder="Email ID"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="password" className="form-all mb-1 mt-2">
                    Create Password
                  </label>
                  <div className="password-section">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <div
                      className="password-validation-message"
                      style={{ color: passwordStrength.color }}
                    >
                      {passwordStrength.text}
                    </div>
                    <div
                      className="password-icon-1"
                      onClick={() => handleShowPassword("password")}
                    >
                      {showPassword ? (
                        <PiEyeClosedDuotone
                          className="react-pass-icons"
                          size={22}
                        />
                      ) : (
                        <PiEyeDuotone className="react-pass-icons" size={22} />
                      )}
                    </div>
                  </div>
                  <div className="password-section">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control password mt-3"
                      required
                      placeholder="Re-Enter Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <div
                      className="password-icon-2"
                      onClick={() => handleShowPassword("confirmPassword")}
                    >
                      {showConfirmPassword ? (
                        <PiEyeClosedDuotone
                          className="react-pass-icons"
                          size={22}
                        />
                      ) : (
                        <PiEyeDuotone className="react-pass-icons" size={22} />
                      )}
                    </div>
                  </div>

                  <div className="text-left">
                    <p className="para">
                      Receive relevant offers and promotional communications
                      <br />
                      By signing up, I agree{" "}
                      <a href="https://www.example.com" className="terms">
                        terms.
                      </a>
                    </p>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn reg-orange-btn">
                      {buttonText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
