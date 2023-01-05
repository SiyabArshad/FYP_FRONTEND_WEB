import React from "react";
import { useParams } from "react-router-dom";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";

const SubjectAttendence = () => {
  const params = useParams();

  return (
    <div className="bars">
      <SubjectVerNav subjectName={params.subject} linkName="attendence" />
      <SubjectHorNav heading="Attendence" content={<h1>Attendence Here</h1>} />
    </div>
  );
};

export default SubjectAttendence;
