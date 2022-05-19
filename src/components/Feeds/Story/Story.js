import React from "react";
import "./Story.css";

function Story({ storyImg, profilePhoto, username }) {
  return (
    <>
      <div className="feed__stories">
        <img src={storyImg} alt="story" className="feed__stories__img" />
        <img src={profilePhoto} alt="user" className="feed__stories__user" />
        <h4>{username}</h4>
      </div>
    </>
  );
}

export default Story;
