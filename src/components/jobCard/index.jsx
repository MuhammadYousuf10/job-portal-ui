import React from "react";
import teamsLogo from "../../assets/images/teams-logo.svg";
import locationIcon from "../../assets/images/location-icon.svg";
import clockIcon from "../../assets/images/clock-icon.svg";
import btnTag from "../../assets/images/btn-tag.svg";
import "./style.scss";

const JobCard = ({ job }) => {
  return (
    <div className="job-card-section">
      <div className="job-card">
        {job?.isPromoted && <span className="badge">Promoted</span>}
        <div className="head-section">
          <div className="logo">
            <img src={teamsLogo} alt="logo" />
          </div>
          <div className="info">
            <h4 className="heading4">{job?.title}</h4>
            <p className="para-sm">{job?.company}</p>
          </div>
        </div>
        <div className="job-content">
          <div className="content-wrap">
            <div className="icon">
              <img src={locationIcon} alt="location" />
            </div>
            <p className="para-sm">{job?.location}</p>
          </div>
          <div className="content-wrap">
            <div className="icon">
              <img src={clockIcon} alt="clock" />
            </div>
            <p className="para-sm">
              {job?.postedDate} | <span>{job?.applicants} applicants</span>
            </p>
          </div>
          <div className="bottom-section">
            <button className="btn btn-primary btn-sm apply-btn">
              Apply Now
            </button>
            <div className="tag">
              <img src={btnTag} alt="tag icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
