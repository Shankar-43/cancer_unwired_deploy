"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import img1 from "../../../public/image/CU-brand.png";
import img2 from "../../../public/image/notification-icon.png";
import img3 from "../../../public/image/doctor-img.png";
import Link from "next/link";
import "./sidebar.css";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

const Sidebar = () => {
  const pathname = usePathname();
  // console.log(pathname);
  const handleSignOut = async () => {
    try {
      // Sign out the user
      await signOut({ redirect: false, callbackUrl: "/login" });
      // Redirect the user to the login page
      toast.success("Sign Out Successfully", { delay: 1000 });
      router.push("/login"); // Uncommented this line to redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <div className="container-fluid dashboard-container">
        <Image src={img1} className="img-brand" alt="brand-cu" />
        <span className="dashboard-text mx-3">Doctor Dashboard</span>
        <span className="notification">
          <Image
            src={img2}
            className="notification-icon mt-3"
            id="notification-icon"
            alt=""
          />
        </span>
      </div>

      <nav className="navbar navbar-expand-md">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column custom-navbar sidebar">
            <li
              className={`nav-item profile-image-wrapper mt-4 ${
                pathname === "/profile-Setting" ? "active" : ""
              }`}
            >
              <label htmlFor="profileImage">
                <Image
                  src={img3}
                  alt="Profile Image"
                  className="profile-image"
                />
              </label>
              <input type="file" id="profileImage" accept="image/*" />
            </li>
            <li
              className={`nav-item ${
                pathname === "/profile-Setting" ? "active" : ""
              }`}
            >
              <Link href="/profile-Settinga" legacyBehavior>
                <a className="nav-link nav-bar-links mx-3 mt-4">Home</a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/appointments" ? "active" : ""
              }`}
            >
              <Link href="/appointment" legacyBehavior>
                <a className="nav-link nav-bar-links mx-3 mt-3">Appointments</a>
              </Link>
            </li>

            <li
              className={`nav-item ${pathname === "/videos" ? "active" : ""}`}
            >
              <Link href="/videos" legacyBehavior>
                <a className="nav-link nav-bar-links mx-3 mt-3">Videos</a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/payment-statuses" ? "active" : ""
              }`}
            >
              <Link href="/payment-statuses" legacyBehavior>
                <a className="nav-link nav-bar-links mx-3 mt-3">
                  Payment Status
                </a>
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/inbox" ? "active" : ""}`}>
              <Link href="/inbox" legacyBehavior>
                <a className="nav-link nav-bar-links mx-3 mt-4">Inbox</a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/scheduler" ? "active" : ""
              }`}
            >
              <Link href="/scheduler" legacyBehavior>
                <a className="nav-link nav-bar-links mx-3 mt-3">Scheduler</a>
              </Link>
            </li>
            <li
              className={`nav-item${pathname === "/feedback" ? "active" : ""}`}
            >
              <Link href="/feedback" legacyBehavior>
                <a className="nav-link nav-bar-links-ex-m">Feedback</a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/profile-Settings" ? "active" : ""
              }`}
            >
              <Link href="/profile-Setting" legacyBehavior>
                <a className="nav-link nav-bar-links mx-3 mt-3">
                  Profile Settings
                </a>
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/login" ? "active" : ""}`}>
              <Link href="/login">
                <button
                  type="button"
                  className="btn nav-bar-button mx-3 mt-3 mb-5"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
