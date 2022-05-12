import { ProfilePhoto } from "../../Imports";
import "./Profile.css";

function Picture() {
  return (
    <>
      <div className="picture">
        <img src={ProfilePhoto} alt="photo" />
      </div>
    </>
  );
}

export default Picture;
