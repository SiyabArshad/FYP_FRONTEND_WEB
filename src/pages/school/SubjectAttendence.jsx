import React from "react";
import { useParams } from "react-router-dom";
import AttendenceContent from "../../components/school/AttendenceContent";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";
import HeasderSchool from "../../components/school/HeasderSchool";

const SubjectAttendence = () => {
    const params = useParams();

    return ( <
        >
        <
        HeasderSchool / >
        <
        div className = "bars" >
        <
        SubjectVerNav subjectName = { params.subject }
        linkName = "attendence" / >
        <
        SubjectHorNav heading = "Attendence"
        content = { < AttendenceContent / > }
        />{" "} <
        /div>{" "} <
        />
    );
};

export default SubjectAttendence;