import React from "react";
import { useState } from "react";
import ClassCard from "../../components/school/ClassCard";
import CreateClass from "../../components/school/CreateClass";

const Classes = () => {
  const [createClass, setCreateClass] = useState(false);
  const classes = [
    { class: "Class 1" },
    { class: "Class 2" },
    { class: "Class 3" },
    { class: "Class 4" },
    { class: "Class 5" },
    { class: "Class 6" },
    { class: "Class 7" },
    { class: "Class 8" },
    { class: "Class 9" },
    { class: "Class 10" },
    { class: "1st Year" },
    { class: "2nd Year" },
  ];
  return (
    <>
      <div className="adhmmain class_main">
        <div className="adhmsearch">
          <input type="text" placeholder="Search Classes" />
        </div>

        <div className="createschool">
          <button onClick={() => setCreateClass(true)}>Create Class</button>
        </div>

        <div className="adhmschools">
          {classes.map((data, i) => (
            <ClassCard choose="classes" class={data.class} key={i} />
          ))}
        </div>
        {createClass ? (
          <div className="adhmcspc">
            <CreateClass
              closeCreateComp={(state) => {
                setCreateClass(state);
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Classes;
