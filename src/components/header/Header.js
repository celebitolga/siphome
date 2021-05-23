import React, { useState } from 'react';
import "./Header.scss";

import Logo from "./../../svg/Logo";
import Logotext from "./../../svg/Logotext";

function Header() {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuClicked((prev) => !prev);
  };

  return (
    <header className="Header">
      <div className="container">
        <div className="Header-logo">
          <div className="Header-logo-img">
            <Logo />
          </div>
          <div className="Header-logo-text">
            <Logotext />
          </div>
        </div>

        <div className="Header-mobileMenu">
          <div
            className="Header-mobileMenu-dropdown"
            className={
              mobileMenuClicked
                ? 'Header-mobileMenu-dropdown dropdown-open'
                : 'Header-mobileMenu-dropdown dropdown-close'
            }
          >
            <div className="Header-mobileMenu-dropdown-top">
              <h3 className="Header-mobileMenu-dropdown-top-text">
                Siphome Menu
              </h3>
              <button
                onClick={handleMobileMenuClick}
                className="Header-mobileMenu-closeBtn closeBtn"
              >
                Close
              </button>
            </div>

            <nav className="Header-mobileMenu-dropdown-center">
              <a
                target="#"
                className="Header-mobileMenu-dropdown-center-item mobileMenuActive"
              >
                Home
              </a>
              <a target="#" className="Header-mobileMenu-dropdown-center-item">
                Features
              </a>
              <a target="#" className="Header-mobileMenu-dropdown-center-item">
                Services
              </a>
              <a target="#" className="Header-mobileMenu-dropdown-center-item">
                Contact
              </a>
              <a target="#" className="Header-mobileMenu-dropdown-center-item">
                FAQ
              </a>
            </nav>

            <div className="Header-mobileMenu-dropdown-down">
              <div className="Header-mobileMenu-dropdown-down-item greenBtn">
                Get Started
              </div>
              <div className="Header-mobileMenu-dropdown-down-item whiteBtn">
                Sign In
              </div>
            </div>
          </div>

          <button
            onClick={handleMobileMenuClick}
            className="Header-mobileMenu-menuBtn menuBtn"
          >
            Menu
          </button>
        </div>

        <nav className="Header-dekstopMenu">
          <div className="Header-dekstopMenu-left">
            <a
              href="#"
              className="Header-dekstopMenu-left-item dekstopMenuActive"
            >
              Home
            </a>
            <a href="#" className="Header-dekstopMenu-left-item">
              Features
            </a>
            <a href="#" className="Header-dekstopMenu-left-item">
              Services
            </a>
            <a href="#" className="Header-dekstopMenu-left-item">
              Contact
            </a>
            <a href="#" className="Header-dekstopMenu-left-item">
              FAQ
            </a>
          </div>
          <div className="Header-dekstopMenu-right">
            <a href="#" className="Header-dekstopMenu-right-item colorBlack">
              Sign In
            </a>
            <a href="#" className="Header-dekstopMenu-right-item colorGreen">
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
