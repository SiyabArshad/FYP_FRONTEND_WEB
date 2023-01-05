import React from "react";
import { useState } from "react";

const AddStudent = ({ closeCreateComp }) => {
  const [close, setClose] = useState(false);

  return (
    <div className="csform">
      <div className="csformclose">
        <i
          onClick={() => closeCreateComp(setClose(!close))}
          className="fa-solid fa-xmark"
        ></i>
      </div>
      <input type="text" placeholder="Student Name" />
      <input type="text" placeholder="Father Name" />
      <input type="text" placeholder="Registration Number" />
      <div style={{ marginTop: ".5rem", width: "100%", display: "flex" }}>
        <label style={{ paddingTop: "10px", width: "100px" }}>
          Student Pic:
        </label>
        <input type="file" />
      </div>
      <button>Add Student</button>
    </div>
  );
};

export default AddStudent;
