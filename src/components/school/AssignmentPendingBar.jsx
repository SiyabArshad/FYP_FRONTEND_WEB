import React from "react";
import { useState } from "react";
import CreateUpdateAssignment from "./CreateUpdateAssignment";

const AssignmentPendingBar = (props) => {
  const [updatePendingAssignment, setUpdatePendingAssignment] = useState(false);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  const fullDate = `${monthNames[month]} ${date}, ${year}`;
  const time =
    hour > 12
      ? `${Math.abs(12 - hour)}:${minutes} PM`
      : `${Math.abs(12 - hour)}:${minutes} AM`;
  return (
    <div className="pendingContent">
      <div className="assignmentBar">
        <h2>{props.assignName}</h2>
        <p>
          Due{" "}
          <span style={{ color: "#FF5C5C" }}>
            {fullDate} {time}
          </span>
        </p>
      </div>
      <div className="btns createschool">
        <button
          onClick={() => setUpdatePendingAssignment(true)}
          className="assignBtn"
        >
          Update
        </button>
        <button className="assignBtn" style={{ background: "#FF5C5C" }}>
          Delete
        </button>
      </div>
      {updatePendingAssignment ? (
        <div style={{ position: "absolute", left: "0" }} className="adhmcspc">
          <CreateUpdateAssignment
            btnName="Update Assignment"
            assignmentHeading={props.assignName}
            closeCreateComp={(state) => {
              setUpdatePendingAssignment(state);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default AssignmentPendingBar;
