import "./profile.css";
import { faCircleUser, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Item } from "./item";
import Vertical from "./vertical.jpeg";
import { useState, useEffect } from "react";
import { Tag } from "./tag";

let userName = "Hannes Ennemann";

export function Profile({ isLoading, setIsLoading }) {
  const [logoutInitiated, setLogoutInitiated] = useState(false);

  const logout = () => {
    setIsLoading(true);
    window.open("http://localhost:3001/auth/logout", "_self");
    setIsLoading(false);
    setLogoutInitiated(true);
  };
  if (logoutInitiated) {
    setIsLoading(false);
  }
  return (
    <div className="profile-main">
      <div className="profile-main-sub-div">
        <a href="/" className="profile-back-icon">
          <FontAwesomeIcon icon={faAngleLeft} />
        </a>
        <div className="profile-user">
          <FontAwesomeIcon className="profile-user-icon" icon={faCircleUser} />
          <h1 className="profile-user-user-name">{userName}</h1>
        </div>
        <div className="profile-edit">
          <div className="profile-edit-sub">
            <h3 className="profile-edit-text">
              Edit Profile{" "}
              <FontAwesomeIcon
                className="profile-next-icon"
                icon={faAngleRight}
              />
            </h3>
          </div>
        </div>
        <div className="profile-sell">
          <div className="profile-sell-sub">
            <h3 className="profile-sell-text">
              Sell{" "}
              <FontAwesomeIcon
                className="profile-next-icon-1"
                icon={faAngleRight}
              />
            </h3>
          </div>
        </div>
        <div className="profile-past-sales">
          <div className="profile-past-sales-sub">
            <h3 className="profile-past-sales-text">
              Past Sales{" "}
              <FontAwesomeIcon
                className="profile-next-icon-2"
                icon={faAngleRight}
              />
            </h3>
          </div>
        </div>
        <div className="profile-currently-selling-master-div">
          <div className="profile-currently-selling">
            <h3 className="profile-currently-selling-text">
              Currently Selling
            </h3>
            <div className="profile-currently-selling-item-container">
              <Item price={30.99} title={"Item"} link={"/"} image={Vertical} />
            </div>
          </div>
        </div>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
