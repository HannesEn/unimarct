import "./Nav.css";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { handleTagClick } from "./tagClick";

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
            className="navSearchInput"
            type="search"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          <button
            className="navSearchInputButtonIcon"
            onClick={(e) => handleSearch(e)}
          >
            {" "}
            <FontAwesomeIcon className="navSearchIcon" icon={faSearch} />
          </button>
          <a className="profile-icon" href="/profile">
            <FontAwesomeIcon className="navUserIcon" icon={faCircleUser} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
