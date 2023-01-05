import React from "react";
import { useParams } from "react-router-dom";
import AssignmentCompleted from "../../components/school/AssignmentCompleted";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";

const SubjectAssignmentCompleted = () => {
  const params = useParams();

  return (
    <div className="bars">
      <SubjectVerNav subjectName={params.subject} linkName="assignment" />
      <SubjectHorNav heading="Assignments" content={<AssignmentCompleted />} />
    </div>
  );
};

export default SubjectAssignmentCompleted;
