import React from "react";
import { useParams } from "react-router-dom";
import AssignmentPending from "../../components/school/AssignmentPending";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";

const SubjectAssignmentPending = () => {
  const params = useParams();

  return (
    <div className="bars">
      <SubjectVerNav subjectName={params.subject} linkName="assignment" />
      <SubjectHorNav heading="Assignments" content={<AssignmentPending />} />
    </div>
  );
};

export default SubjectAssignmentPending;
