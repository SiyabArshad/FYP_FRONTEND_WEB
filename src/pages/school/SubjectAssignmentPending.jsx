import React from "react";
import { useParams } from "react-router-dom";
import AssignmentPending from "../../components/school/AssignmentPending";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";
import HeasderSchool from "../../components/school/HeasderSchool";

const SubjectAssignmentPending = () => {
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
        content = { < AssignmentPending / > }
        />{" "} <
        /div>{" "} <
        />
    );
};

export default SubjectAssignmentPending;