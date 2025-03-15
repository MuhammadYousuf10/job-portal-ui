import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import SearchBar from "../searchBar";
import JobList from "../jobList";
import "../dashboard/style.scss";
import JobListTabs from "../jobListTabs";
// import jobsData from "../../data/jobsData";
import { jobsData, recommendedJobsData } from "../../data/jobsData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-layout">
        <div className="container">
          <div className="main-content">
            <Sidebar />
            <div className="content">
              <h1 className="heading1">
                Find your Dream Job, <span>Albert!</span>
              </h1>
              <p className="para-lg">
                Explore the latest job openings and apply for the best
                opportunities available today!
              </p>
              <SearchBar />
              <JobListTabs />
              <JobList
                title="Featured Jobs"
                subTitle="See Featured Jobs"
                jobs={jobsData}
              />
              <JobList
                title="Recommended Jobs"
                subTitle="See Recommended Jobs"
                jobs={recommendedJobsData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
