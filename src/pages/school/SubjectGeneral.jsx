import React from "react";
import { useParams } from "react-router-dom";
import GeneralContent from "../../components/school/GeneralContent";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";

const SubjectGeneral = () => {
  const params = useParams();

  return (
    <>
      <div className="bars">
        <SubjectVerNav subjectName={params.subject} />
        <SubjectHorNav
          heading="General"
          content={<GeneralContent subjectName={params.subject} />}
        />
      </div>
    </>
  );
};

export default SubjectGeneral;
