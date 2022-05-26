import React from "react";
import {
  Neymar,
  Cristiano,
  Rashford,
  Chukwueze,
  ProfilePhoto,
  Video,
  Gallery,
  Emoji,
  Girl,
} from "../../Imports";
import "./Feed.css";
import Story from "./Story/Story";

import CreateStory from "./Story/CreateStory";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Room from "./Room/Room";

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

          <div className="feeds__mind__post__bottom">
            <div className="feeds__mind__post__bottom__video">
              <img src={Video} alt="" /> <span>Live video</span>
            </div>

            <div className="feeds__mind__post__bottom__gallery">
              <img src={Gallery} alt="" /> <span>Photo/video</span>
            </div>

            <div className="feeds__mind__post__bottom__emoji">
              <img src={Emoji} alt="" /> <span>Feeling/activity</span>
            </div>
          </div>
        </div>
      </div>

      <div className="feeds__room">
        <div className="feeds__room__icon">
          <VideoCallIcon />
        </div>

        <div className="feeds__room__users">
          <Room photo={Girl} />
          <Room photo={Girl} />
        </div>
      </div>
    </>
  );
}

export default Feed;
