import React from "react";
import { useParams } from "react-router-dom";
import AssignmentCompleted from "../../components/school/AssignmentCompleted";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";
import HeasderSchool from "../../components/school/HeasderSchool";

const SubjectAssignmentCompleted = () => {
    const params = useParams();
    const subject = params.subject;

    return ( <
        > { " " } <
        HeasderSchool linknumber = { 4 }
        />{" "} <
        div className = "bars" >
        <
        SubjectVerNav subjectName = { subject }
        linkName = "assignment" / >
        <
        SubjectHorNav heading = "Assignments"
        content = { < AssignmentCompleted / > }
        />{" "} <
        /div>{" "} <
        />
    );
};

export default SubjectAssignmentCompleted;