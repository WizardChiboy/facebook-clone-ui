import { ProfilePhoto } from "../../Imports";

import "./Profile.css";

function Picture({ text }) {
  return (
    <>
      <div className="picture">
        <img src={ProfilePhoto} alt="profile" />
        <h4>{text}</h4>
      </div>
    </>
  );
}

export default Picture;
