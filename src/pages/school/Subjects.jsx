import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ClassCard from "../../components/school/ClassCard";
import CreateSubject from "../../components/school/CreateSubject";

const Subject = () => {
  const [createClass, setCreateClass] = useState(false);
  const params = useParams();

  const subjects = [
    { Subject: "English" },
    { Subject: "Urdu" },
    { Subject: "Math" },
    { Subject: "Physics" },
    { Subject: "Chemistry" },
    { Subject: "Bio" },
  ];

  return (
    <>
      <div className="adhmmain class_main">
        <div className="adhmsearch">
          <input type="text" placeholder="Search Subject" />
        </div>
        <h1 className="SSheading">
          {params.class + " - Section "}
          {params.section}
        </h1>
        <div className="createschool">
          <button onClick={() => setCreateClass(true)}>Create Subject</button>
        </div>

        <div className="adhmschools">
          {subjects.map((data, i) => (
            <ClassCard choose="subjects" class={data.Subject} key={i} />
          ))}
        </div>
        {createClass ? (
          <div className="adhmcspc">
            <CreateSubject
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

export default Subject;
