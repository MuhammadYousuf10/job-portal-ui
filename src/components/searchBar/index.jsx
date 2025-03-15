import React from "react";
import search from "../../assets/images/search-icon-white.svg";
import "../searchBar/style.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <p className="para-lg">Job Title, Company, or Keywords</p>
      <div className="search-content">
        <span className="separator"></span>
        <select className="select">
          <option>Select Location</option>
        </select>
        <span className="separator"></span>
        <select className="select">
          <option>Job Type</option>
        </select>
        <button className="btn btn-primary">
          <img src={search} alt="" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
