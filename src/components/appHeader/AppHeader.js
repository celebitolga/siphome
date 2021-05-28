import React, { useState } from 'react';
import './AppHeader.scss'

import Logo from "../../svg/Logo";
import Logotext from "../../svg/Logotext";

function AppHeader() {
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
            // eslint-disable-next-line react/jsx-no-duplicate-props
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
              <span
                target="#"
                className="Header-mobileMenu-dropdown-center-item mobileMenuActive"
              >
                Home
              </span>
              <span target="#" className="Header-mobileMenu-dropdown-center-item">
                Features
              </span>
              <span target="#" className="Header-mobileMenu-dropdown-center-item">
                Services
              </span>
              <span target="#" className="Header-mobileMenu-dropdown-center-item">
                Contact
              </span>
              <span target="#" className="Header-mobileMenu-dropdown-center-item">
                FAQ
              </span>
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
            <span
              href="#"
              className="Header-dekstopMenu-left-item dekstopMenuActive"
            >
              Home
            </span>
            <span href="#" className="Header-dekstopMenu-left-item">
              Features
            </span>
            <span href="#" className="Header-dekstopMenu-left-item">
              Services
            </span>
            <span href="#" className="Header-dekstopMenu-left-item">
              Contact
            </span>
            <span href="#" className="Header-dekstopMenu-left-item">
              FAQ
            </span>
          </div>
          <div className="Header-dekstopMenu-right">
            <span href="#" className="Header-dekstopMenu-right-item colorBlack">
              Sign In
            </span>
            <span href="#" className="Header-dekstopMenu-right-item colorGreen">
              Get Started
            </span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
