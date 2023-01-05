import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddStudent from "./AddStudent";

const SubjectVerNav = (props) => {
  const [addStudent, setAddStudent] = useState(false);
  const params = useParams();

  return (
    <>
      <div className="ver_navbar">
        <img src={require("../../assets/images/poster.jpg")} alt="Img" />
        <h2>{props.subjectName}</h2>
        <ul>
          <li>
            <Link
              className={
                props.linkName === "home"
                  ? "Subject_link active"
                  : "Subject_link"
              }
              to={
                "/classes/" +
                params.class +
                "/" +
                params.section +
                "/" +
                params.subject +
                "/home"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                props.linkName === "assignment"
                  ? "Subject_link active"
                  : "Subject_link"
              }
              to={
                "/classes/" +
                params.class +
                "/" +
                params.section +
                "/" +
                params.subject +
                "/assignment/pendings"
              }
            >
              Assignment
            </Link>
          </li>
          <li>
            <Link
              className={
                props.linkName === "attendence"
                  ? "Subject_link active"
                  : "Subject_link"
              }
              to={
                "/classes/" +
                params.class +
                "/" +
                params.section +
                "/" +
                params.subject +
                "/attendence"
              }
            >
              Attendence
            </Link>
          </li>
        </ul>
        <hr></hr>
        <div className="createschool verNavBtn">
          <button onClick={() => setAddStudent(true)}>AddStudent</button>
        </div>
      </div>
      <div className="pendingContent">
        {addStudent ? (
          <div
            style={{ position: "absolute", left: "0", color: "#131517" }}
            className="adhmcspc"
          >
            <AddStudent
              closeCreateComp={(state) => {
                setAddStudent(state);
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SubjectVerNav;
