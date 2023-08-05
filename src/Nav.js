import "./Nav.css";
import React, { useState } from "react";

function Nav({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="body">
      <div className="nav">
        <div className="list">
          <a href="/" className="logo-main">
            Unimarct
          </a>
          <input
            type="text"
            placeholder="Search items..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>Search</button>
          <a href="/" className="home-button">
            Home
          </a>
          <a className="company-button">Company</a>
          <a className="profile-icon">Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
