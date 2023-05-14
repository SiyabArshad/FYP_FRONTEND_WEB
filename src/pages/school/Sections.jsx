import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ClassCard from "../../components/school/ClassCard";
import CreateClass from "../../components/school/CreateClass";
import HeasderSchool from "../../components/school/HeasderSchool";

const Sections = () => {
    const [createClass, setCreateClass] = useState(false);
    const params = useParams();

    const sections = [
        { section: "A" },
        { section: "B" },
        { section: "C" },
        { section: "D" },
        { section: "E" },
        { section: "F" },
    ];
    return ( <
        >
        <
        HeasderSchool / >
        <
        div className = "adhmmain class_main" >
        <
        div className = "adhmsearch" >
        <
        input type = "text"
        placeholder = "Search Section" / >
        <
        /div>{" "} <
        h1 className = "SSheading" > { params.class } < /h1> <
        div className = "adhmschools" > { " " } {
            sections.map((data, i) => ( <
                ClassCard choose = "sections"
                class = { data.section }
                key = { i }
                />
            ))
        } { " " } <
        /div>{" "} {
            createClass ? ( <
                div className = "adhmcspc" >
                <
                CreateClass closeCreateComp = {
                    (state) => {
                        setCreateClass(state);
                    }
                }
                />{" "} <
                /div>
            ) : null
        } { " " } <
        /div>{" "} <
        />
    );
};

export default Sections;