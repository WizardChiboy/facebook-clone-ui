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

function Feed() {
  return (
    <>
      <div className="feeds">
        <Story
          username="Don martins"
          profilePhoto={ProfilePhoto}
          storyImg={ProfilePhoto}
        />

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
