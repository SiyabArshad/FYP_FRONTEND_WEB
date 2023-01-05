import React from "react";
import { useParams } from "react-router-dom";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";
import HomeContent from "../../components/school/HomeContent";

const SubjectHome = () => {
  const params = useParams();

  return (
    <div className="bars">
      <SubjectVerNav subjectName={params.subject} linkName="home" />
      <SubjectHorNav heading="Home" content={<HomeContent />} />
    </div>
  );
};

export default SubjectHome;
