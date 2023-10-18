import React from "react";
import Image from "next/image";
import img1 from "../../../public/doctorregister-img/Cancerunwiredreg.png";
import img2 from "../../../public/doctorregister-img/Onboarding.png";
import img3 from "../../../public/doctorregister-img/left-verify-leaf.png";
import img4 from "../../../public/doctorregister-img/right-verify-leaf.png";

const MobileVerify = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 custom-image-panel">
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

        {/* <!-- --------------------------Form page division right c--------------------------------> */}
        <div className="col-sm-8 varify-mm">
          <div className="verify-group-box">
            <p className="var-r-mobile">Verify Mobile</p>
            <hr />

            {/* <!-- ------------------------------Form-------------------------------------> */}

            <div className="reg-left-leaf d-none d-xl-block">
              <Image
                className="reg-leftleaf-img"
                // src="doctorregister-img/left-verify-leaf.png"
                src={img3}
                alt=""
              />
            </div>
            <div className="reg-right-leaf d-none d-xl-block">
              <Image
                className="reg-rightleaf-img"
                // src="doctorregister-img/right-verify-leaf.png"
                src={img4}
                alt=""
              />
            </div>
            <form>
              <div className="form-group m-var">
                <div className="row">
                  <div className="col-sm-12">
                    <h5 className="ver-phone">We have sent you an OTP on</h5>
                    <label htmlFor="email" className="phone-var">
                      +91 9955667894
                    </label>
                    <br />
                    <label htmlFor="email" className="otp-var">
                      OTP
                    </label>
                    <input
                      type="phone"
                      className="form-control ver-place"
                      placeholder="Please enter the 6 digit OTP here to verify"
                    />
                    <button className="btn btn-ver" id="resendOTPButton">
                      Resend OTP ?
                    </button>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button type="submit" className="btn reg-orange-btn mb-4">
                    Send OTP
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileVerify;
