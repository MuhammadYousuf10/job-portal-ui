import React from "react";
import JobCard from "../jobCard";
import "../jobList/style.scss";

const JobList = ({ title, subTitle, jobs }) => {
  return (
    <div className="job-list">
      <div className="sub-heading">
        <h2 className="heading2">{title}</h2>
        <h4 className="heading4">{subTitle}</h4>
      </div>
      <div className="jobs">
        {jobs?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
