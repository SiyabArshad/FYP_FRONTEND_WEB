import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AssignmentPendingBar from "./AssignmentPendingBar";
import CreateUpdateAssignment from "./CreateUpdateAssignment";

const AssignmentCompleted = () => {
  const [createAssignment, setCreateAssignment] = useState(false);
  const params = useParams();
  const assignmentNames = [
    "Assignment 1",
    "Assignment 2",
    "Assignment 3",
    "Assignment 4",
    "Assignment 5",
    "Assignment 6",
    "Assignment 7",
    "Assignment 8",
    "Assignment 9",
    "Assignment 10",
  ];

  return (
    <>
      <div className="assigment_page">
        <div className="complete_incomplete">
          <div className="CI isActive">
            <Link
              to={
                "/classes/" +
                params.class +
                "/" +
                params.section +
                "/" +
                params.subject +
                "/assignment/pendings"
              }
              className="CI_Child childActive"
            >
              Pending
            </Link>
          </div>
          <div className="CI">
            <Link
              to={
                "/classes/" +
                params.class +
                "/" +
                params.section +
                "/" +
                params.subject +
                "/assignment/completed"
              }
              className="CI_Child"
            >
              Completed
            </Link>
          </div>
        </div>
        <div className="createschool">
          <button onClick={() => setCreateAssignment(true)}>
            Create Assignment
          </button>
        </div>
        {assignmentNames.map((name, i) => (
          <AssignmentPendingBar key={i} assignName={name} />
        ))}
        <div className="pendingContent">
          {createAssignment ? (
            <div
              style={{ position: "absolute", left: "0" }}
              className="adhmcspc"
            >
              <CreateUpdateAssignment
                btnName="Create Assignment"
                closeCreateComp={(state) => {
                  setCreateAssignment(state);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AssignmentCompleted;
