import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import profilePic from "../../assets/images/profile-avatar.svg";
import navItems from "../../data/navItems.json";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import "./style.scss";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
      if (window.innerWidth >= 1280) {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll"); // Clean up on unmount
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar-content">
          {/* Left Section - Logo & Links */}
          <div className="navbar-left">
            {isMobile && (
              <div
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <RiCloseLargeFill size={24} />
                ) : (
                  <RxHamburgerMenu size={24} />
                )}
              </div>
            )}
            <div className="navbar-logo">
              <img src={logo} alt="Find Jobs Logo" />
            </div>
            {!isMobile && (
              <ul className="navbar-links">
                {navItems?.map((item, index) => (
                  <li key={index}>
                    <a href={item?.link}>{item?.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Right Section - Search & Profile */}
          <div className={`navbar-right ${isMobile ? "isMobile" : ""}`}>
            <div
              className="navbar-search"
              onClick={() => setIsSearchOpen(true)}
            >
              <img src={searchIcon} alt="Search" />
              {!isMobile && <input type="text" placeholder="Search" />}
            </div>
            <button className="btn btn-primary">Resume Builder</button>
            <div className="navbar-profile">
              <img src={profilePic} alt="Profile" />
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          // className="mobile-menu"
        >
          <ul className="navbar-links-mob">
            {navItems?.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search Modal */}
      {isMobile && isSearchOpen && (
        <div className="search-modal">
          <div className="search-modal-content">
            <button
              className="close-btn"
              onClick={() => setIsSearchOpen(false)}
            >
              ✖
            </button>
            <input type="text" placeholder="Search..." autoFocus />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
