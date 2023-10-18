"use client";
import Image from "next/image";
import img1 from "../../../public/doctorregister-img/Cancerunwiredreg.png";
import img2 from "../../../public/doctorregister-img/Onboarding.png";
import img3 from "../../../public/doctorregister-img/log-circle.png";
import img4 from "../../../public/doctorregister-img/log-leafright.png";
import img5 from "../../../public/doctorregister-img/log-leaf.png";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/inbox");
      return;
    }
  });

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const determineInputType = () => {
    if (/^\d+$/.test(userInput)) {
      return "phone";
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput)) {
      return "email";
    } else {
      return "unknown";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userInput) {
      toast.error("Email or Mobile Number is required.");
      return;
    }
    if (!password) {
      toast.error("Password is required.");
      return;
    }

    const inputType = determineInputType();

    if (inputType === "phone") {
      // Handle phone login logic
    } else if (inputType === "email") {
      try {
        const response = await signIn("credentials", {
          userInput,
          password,
          redirect: false,
          callbackUrl: "/",
        });
        console.log(response, "this is response");
        if (response?.error) {
          console.error("An error occurred during login:", response.error);
          toast.error("Login failed. Please check your credentials.");
        } else {
          toast.success("Login successful!");
          router.push("/inbox");
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        toast.error("Login failed. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 custom-image-panel">
            {/* <!--------------------------- Leaf part design-------------------------------> */}
            <div>
              <Image className="right-logo" src={img1} alt="" />
            </div>

            <div>
              <p className="reg-heading mt-2">Welcome</p>
              <p className="landing-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys
              </p>
            </div>
            <div className="onboard">
              <Image className="img-fluid onboard-image" src={img2} alt="" />
            </div>
          </div>

          {/* <!-- --------------------------Form page division right --------------------------------> */}
          <div className="col-sm-8 log-t-p">
            <div className="reg-form-box">
              <div className="tabs-col">
                <div className="row">
                  <div className="col-sm-6 login-col">
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
            <div className="circle d-none d-xxl-block">
              <Image
                className="circle-img img-fluid"
                // src="/doctorregister-img/log-circle.png"
                src={img3}
                alt=""
              />
            </div>
            <div className="left-leaf d-none d-xxl-block">
              <Image
                className="leftleaf-img img-fluid"
                // src="/doctorregister-img/log-leafright.png"
                src={img4}
                alt=""
              />
            </div>
            <div className="right-leaf d-none d-xxl-block">
              <Image
                className="rightleaf-img img-fluid"
                // src="/doctorregister-img/log-leaf.png"
                src={img5}
                alt=""
              />
            </div>

            {/* <!-- ------------------------------Form-------------------------------------> */}
            <div className="login-form-box">
              <form>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="email" className="email">
                        Mobile Number/Email
                      </label>
                      <input
                        type="phone"
                        className="form-control email"
                        placeholder="Mobile Number"
                        value={userInput}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="password" className="email">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div className="custom-form">
                      <div className="form-check">
                        <input
                          className="form-check-input thirtyDays"
                          type="radio"
                          name="select"
                          value="thirtyDays"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                        />
                        <label
                          className="form-check-label thirtyDays"
                          for="thirtyDays"
                        >
                          Remember for 30 days
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 custom-form">
                    <a href="#" className="forgot-pwd">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input otp"
                    type="radio"
                    name="select"
                    value="otp"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  />
                  <label className="form-check-label otp" for="otp">
                    Login with OTP instead of Password
                  </label>
                </div>
              </form>
              <div id="main" className="text-center">
                <div className="otpBlock collapse" id="collapseExample">
                  <p className="enterOtpBlock mt-4">Enter OTP</p>
                  {/* <!-- Use the "collapse" class and specify the target ID --> */}
                  <form id="otp-form">
                    <input type="text" className="otp-input" maxlength="1" />
                    <input type="text" className="otp-input" maxlength="1" />
                    <input type="text" className="otp-input" maxlength="1" />
                    <input type="text" className="otp-input" maxlength="1" />
                  </form>
                </div>
              </div>
              <div className="text-center mb-4">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="btn orange-btn"
                >
                  Login to continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
