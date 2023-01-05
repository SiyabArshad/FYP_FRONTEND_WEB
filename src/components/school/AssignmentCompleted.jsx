import React from "react";
import { Link, useParams } from "react-router-dom";
const AssignmentContent = () => {
  const params = useParams();
  const completedBar = [
    { assignment: "Assignment 1", studentName: "XX-CS-11_28" },
    { assignment: "Assignment 2", studentName: "XX-CS-11_21" },
    { assignment: "Assignment 3", studentName: "XX-CS-11_22" },
    { assignment: "Assignment 4", studentName: "XX-CS-11_23" },
    { assignment: "Assignment 5", studentName: "XX-CS-11_24" },
    { assignment: "Assignment 6", studentName: "XX-CS-11_251" },
    { assignment: "Assignment 7", studentName: "XX-CS-11_26" },
    { assignment: "Assignment 8", studentName: "XX-CS-11_27" },
    { assignment: "Assignment 9", studentName: "XX-CS-11_29" },
    { assignment: "Assignment 10", studentName: "XX-CS-11_20" },
  ];

  return (
    <>
      <div className="assigment_page">
        <div className="complete_incomplete">
          <div className="CI">
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
              className="CI_Child "
            >
              Pending
            </Link>
          </div>
          <div className="CI isActive">
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
              className="CI_Child childActive"
            >
              Completed
            </Link>
          </div>
        </div>
        {completedBar.map((completed, i) => (
          <div
            key={i}
            className="pendingContent"
            style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}
          >
            <div className="assignmentBar">
              <h2>{completed.assignment}</h2>
              <p>
                Submitted By{" "}
                <span style={{ color: "green" }}>{completed.studentName}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AssignmentContent;
