import React from "react";
import "../jobListTabs/style.scss";

const JobListTabs = () => {
  return (
    <div className="tabs-section">
      <p className="para-lg">Similar:</p>
      <div className="tabs-wrapper">
        <div className="tabs-btn btn btn-outline">Frontend</div>
        <div className="tabs-btn btn btn-outline">Backend</div>
        <div className="tabs-btn btn btn-outline">Graphic Designer</div>
      </div>
    </div>
  );
};

export default JobListTabs;
