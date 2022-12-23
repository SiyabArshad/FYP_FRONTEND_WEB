import React from "react";
import { useState } from "react";

const CreateClass = ({ closeCreateComp }) => {
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
        <input style={{ display: "none" }} type="file" id="imageupload" />
        <label htmlFor="imageupload">
          <img
            className="upprof"
            alt="profile"
            src={require("../../assets/images/poster.jpg")}
          />
        </label>
      </div>
      <input type="text" placeholder="Class Name" />
      <div style={{ width: "100%", display: "flex" }}>
        <label style={{ paddingTop: "5px" }}>Subjects:</label>
        <select style={{ marginLeft: "10px", width: "100%" }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
      <button>Create Class</button>
    </div>
  );
};

export default CreateClass;
