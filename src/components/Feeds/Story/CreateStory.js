import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { ProfilePhoto } from "../../../Imports";

function CreateStory() {
  return (
    <>
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
    </>
  );
}

export default CreateStory;
