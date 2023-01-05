import React from "react";
import { useState } from "react";

const UpdateAssignment = ({ closeCreateComp, assignmentHeading, btnName }) => {
  const [close, setClose] = useState(false);

  return (
    <div className="csform">
      <div className="csformclose">
        <i
          onClick={() => closeCreateComp(setClose(!close))}
          className="fa-solid fa-xmark"
        ></i>
      </div>
      <div className="cadmincenter">
        <label htmlFor="imageupload">
          <img
            className="upprof"
            alt="profile"
            src={require("../../assets/images/poster.jpg")}
          />
        </label>
      </div>
      <h3>{assignmentHeading}</h3>
      {/* <input type="text" placeholder={assignmentHeading} /> */}
      <div style={{ marginTop: ".5rem", width: "100%", display: "flex" }}>
        <label style={{ paddingTop: "10px", width: "80px" }}>Due-Date:</label>
        <input type="date" style={{ width: "10rem" }} />
      </div>
      <div style={{ marginTop: ".5rem", width: "100%", display: "flex" }}>
        <label style={{ paddingTop: "10px", width: "80px" }}>Set Time:</label>
        <input type="time" style={{ width: "10rem" }} />
      </div>
      <button>{}</button>
    </div>
  );
};

export default UpdateAssignment;
