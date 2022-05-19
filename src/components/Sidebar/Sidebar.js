import React from "react";
import {
  Doncodes,
  Friends,
  Groups,
  Memories,
  ReactImg,
  Save,
  Watch,
} from "../../Imports";
import Picture from "../profile/Profile";
import SidebarIcon from "./Sidebar Icon/SidebarIcon";
import "./Sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__top">
          <div className="sidebar__top__profile">
            <Picture text="Don Martins" />
          </div>
          <SidebarIcon icon={Friends} text="Friends" />
          <SidebarIcon icon={Groups} text="Groups" />
          <SidebarIcon icon={Watch} text="Watch" />
          <SidebarIcon icon={Memories} text="Memories" />
          <SidebarIcon icon={Save} text="Saved" />
          <div className="sidebar__more">
            <KeyboardArrowDownIcon />
            <h4>See more</h4>
          </div>
        </div>

        <div className="sidebar__bottom">
          <h4> Your shortcuts</h4>
          <SidebarIcon icon={Groups} text="ASSU STRIKE UPDATE" />
          <SidebarIcon icon={Doncodes} text="Doncodes Aceademy" />
          <SidebarIcon icon={ReactImg} text="React Developers Group" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
