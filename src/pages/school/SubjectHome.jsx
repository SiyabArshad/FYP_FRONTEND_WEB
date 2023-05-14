import React from "react";
import { useParams } from "react-router-dom";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";
import HomeContent from "../../components/school/HomeContent";
import HeasderSchool from "../../components/school/HeasderSchool";

const SubjectHome = () => {
    const params = useParams();
    const subject = params.subject;

    return ( <
        >
        <
        HeasderSchool / >
        <
        div className = "bars" >
        <
        SubjectVerNav subjectName = { subject }
        linkName = "home" / >
        <
        SubjectHorNav heading = "Home"
        content = { < HomeContent / > }
        />{" "} <
        /div>{" "} <
        />
    );
};

export default SubjectHome;