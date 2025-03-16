import React, { useState } from "react";
import avatar from "../../assets/images/sidebar-avatar.svg";
import sideBarBg from "../../assets/images/sidebar-bg.svg";
import arrow from "../../assets/images/collapseable-arrow.svg";
import "./style.scss";

const Sidebar = () => {
  const [isCalendarCollapsed, setIsCalendarCollapsed] = useState(true);

  const toggleCalendar = () => {
    setIsCalendarCollapsed(!isCalendarCollapsed);
  };

  return (
    <aside className="sidebar">
      <div className="side-bar-wrapper">
        <div className="profile-section">
          <div className="bg-img">
            <img src={sideBarBg} alt="" />
          </div>
          <div className="profile-pic">
            <img src={avatar} alt="" />
          </div>
          <div className="profile-content">
            <h2 className="heading2">Albert Flores</h2>
            <p className="para-lg">Senior Product Designer | UI/UX</p>
            <p className="para-lg">Designer | Graphic Designer | Web...</p>
            <p className="para-sm">Clinton, Maryland</p>
          </div>
        </div>
        <div className="stats">
          <div className="stats-content">
            <h4 className="heading4">Profile Visitors</h4>
            <span>140</span>
          </div>
          <div className="stats-content">
            <h4 className="heading4">Resume Viewers</h4>
            <span>20</span>
          </div>
          <div className="stats-content">
            <h4 className="heading4">My Jobs</h4>
            <span>88</span>
          </div>
        </div>
        <div className="calendar">
          <div className="calendar-wrapper">
            <div className="calendar-header">
              <h3 className="heading3">My Calendar</h3>
              <h4 className="heading4">Upcoming Interviews</h4>
            </div>
            <div>
              <img
                src={arrow}
                alt="Toggle Calendar"
                className={isCalendarCollapsed ? "rotated" : ""}
                onClick={toggleCalendar}
              />
            </div>
          </div>
          {!isCalendarCollapsed && (
            <div className="calendar-content">
              <p className="para-sm">No Upcoming Interviews</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
