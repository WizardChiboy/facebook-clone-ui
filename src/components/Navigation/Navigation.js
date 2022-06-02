import React from "react";
import { FbLogo } from "../../Imports";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChatIcon from "@mui/icons-material/Chat";

import "./Navigation.css";
import Picture from "../profile/Profile";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="navigation__side">
          <img src={FbLogo} alt="logo" />
          <input type="text" placeholder="Search Facebook" />
        </div>

        <div className="navigation__center">
          <HomeIcon />
          <OndemandVideoIcon />
          <PeopleAltIcon />
          <SmartToyIcon />
        </div>

        <div className="navigation__menu">
          <Link to="/dashboard">
            <div className="navigation__menu__user">
              <Picture text="Don" />
            </div>
          </Link>

          <div className="navigation__menu__list">
            <AppsIcon />
            <ChatIcon />
            <NotificationsIcon />
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
