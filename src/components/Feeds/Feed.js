import React from "react";
import {
  Neymar,
  Cristiano,
  Rashford,
  Chukwueze,
  ProfilePhoto,
} from "../../Imports";
import "./Feed.css";
import Story from "./Story/Story";

import CreateStory from "./Story/CreateStory";
import Picture from "../profile/Profile";

function Feed() {
  return (
    <>
      <div className="feeds">
        <CreateStory />

        <Story
          username="ronaldo"
          profilePhoto={Cristiano}
          storyImg={Cristiano}
        />

        <Story
          username="rashford"
          profilePhoto={Rashford}
          storyImg={Rashford}
        />

        <Story username="neymar" profilePhoto={Neymar} storyImg={Neymar} />

        <Story
          username="Samuel Chukwueze"
          profilePhoto={Chukwueze}
          storyImg={Chukwueze}
        />
      </div>
      <div className="feeds__mind">
        <div className="feeds__mind__post">
          <div className="feeds__mind__post__top">
            <div className="feeds__mind__post__top__pic">
              <img src={ProfilePhoto} alt="profile" />
            </div>
            <input type="text" placeholder="What's on your mind, Don?" />
          </div>

          <div className="feeds__mind__post__bottom"></div>
        </div>
      </div>
    </>
  );
}

export default Feed;
