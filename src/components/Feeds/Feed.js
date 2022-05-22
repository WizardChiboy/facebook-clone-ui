import React from "react";
import {
  ProfilePhoto,
  Neymar,
  Messi,
  Cristiano,
  Rashford,
  Chukwueze,
} from "../../Imports";
import "./Feed.css";
import Story from "./Story/Story";

import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

function Feed() {
  return (
    <>
      <div className="feeds">
        <div className="feeds__create__story">
          <img
            src={ProfilePhoto}
            alt="story"
            className="feeds__create__story__img"
          />
          <div className="feeds__create__story__icon_container">
            <div className="feeds__create__story__icon_container__icon">
              <AddCircleOutlineRoundedIcon />
            </div>

            <div className="feeds__create__story__icon_container__text">
              <h4>Create Story</h4>
            </div>
          </div>
        </div>

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
    </>
  );
}

export default Feed;
