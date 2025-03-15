import React from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search-icon.svg";
import profilePic from "../../assets/images/profile-avatar.svg";
import navItems from "../../data/navItems.json";
import "./style.scss";

const Navbar = () => {
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
          <div className="navbar-right">
            <div className="navbar-search">
              <img src={search} alt="" />
              <input type="text" placeholder="Search" />
            </div>
            <button className="btn btn-primary ">Resume Builder</button>
            <div className="navbar-profile">
              <img src={profilePic} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
