import React from "react";
import "./SidebarIcon.css"

function SidebarIcon({ text, icon }) {
  return (
    <>
      <div className="sidebar__icon">
        <img src={icon} alt="icon" />
        <h4>{text}</h4>
      </div>
    </>
  );
}

export default SidebarIcon;
