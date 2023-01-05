import React from "react";
import { useState } from "react";

const CreateUpdateAssignment = ({
  closeCreateComp,
  assignmentHeading,
  btnName,
}) => {
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
      {btnName === "Update Assignment" ? (
        <h3>{assignmentHeading}</h3>
      ) : (
        <>
          <input type="text" placeholder="Enter Assignment Name" />
          <textarea
            style={{
              width: "100%",
              borderColor: "#4285F4",
              padding: "0.2rem .5rem",
            }}
            rows="5"
            placeholder="Description"
          />
          <div style={{ marginTop: ".5rem", width: "100%", display: "flex" }}>
            <label style={{ paddingTop: "10px", width: "100px" }}>
              Choose file:
            </label>
            <input type="file" />
          </div>
        </>
      )}
      <div style={{ marginTop: ".5rem", width: "100%", display: "flex" }}>
        <label style={{ paddingTop: "10px", width: "85px" }}>Due-Date:</label>
        <input type="date" style={{ width: "10rem" }} />
      </div>
      <div style={{ marginTop: ".5rem", width: "100%", display: "flex" }}>
        <label style={{ paddingTop: "10px", width: "85px" }}>Set Time:</label>
        <input type="time" style={{ width: "10rem" }} />
      </div>
      <button>{btnName}</button>
    </div>
  );
};

export default CreateUpdateAssignment;
