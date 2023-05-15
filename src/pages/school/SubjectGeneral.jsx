import React from "react";
import { useParams } from "react-router-dom";
import GeneralContent from "../../components/school/GeneralContent";
import SubjectHorNav from "../../components/school/SubjectHorNav";
import SubjectVerNav from "../../components/school/SubjectVerNav";
import HeasderSchool from "../../components/school/HeasderSchool";

const SubjectGeneral = () => {
        const params = useParams();
        const subject = params.subject;

        return ( <
            >
            <
            HeasderSchool linknumber = { 4 }
            />{" "} <
            div className = "bars" >
            <
            SubjectVerNav subjectName = { subject }
            />{" "} <
            SubjectHorNav heading = "General"
            content = { < GeneralContent subjectName = { subject }
                />} /
                >
                <
                /div>{" "} <
                />
            );
        };

        export default SubjectGeneral;