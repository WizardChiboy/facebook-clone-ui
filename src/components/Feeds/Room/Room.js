import React from "react";
import "./Room.css";

function Room({ photo }) {
  return (
    <>
      <div className="room">
        <img src={photo} alt="room user" className="room__user__img" />
        <span></span>
      </div>
    </>
  );
}

export default Room;
