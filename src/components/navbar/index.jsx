import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import profilePic from "../../assets/images/profile-avatar.svg";
import navItems from "../../data/navItems.json";
import "./style.scss";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
      if (window.innerWidth >= 1280) setIsSearchOpen(false); // Reset search on larger screens
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar-content">
          {/* Left Section - Logo & Links */}
          <div className="navbar-left">
            <div className="navbar-logo">
              <img src={logo} alt="Find Jobs Logo" />
            </div>
            <ul className="navbar-links">
              {navItems?.map((item, index) => (
                <li key={index}>
                  <a href={item?.link}>{item?.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Section - Search & Profile */}
          <div className={`navbar-right ${isMobile ? "isMobile" : ""}`}>
            <div
              className="navbar-search"
              onClick={() => setIsSearchOpen(true)}
            >
              <img src={searchIcon} alt="" />
              {!isMobile && <input type="text" placeholder="Search" />}
            </div>
            <button className="btn btn-primary ">Resume Builder</button>
            <div className="navbar-profile">
              <img src={profilePic} alt="" />
            </div>
          </div>
        </nav>
      </div>
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
