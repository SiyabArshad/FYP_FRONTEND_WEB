import * as React from "react";
import CreateStudent from "../../components/school/CreateStudent";
import Studentscard from "../../components/school/Studentscard";
import UpdateStudent from "../../components/school/UpdateStudent";
import HeasderSchool from "../../components/school/HeasderSchool";
import ShowMoreBtn from "../../components/school/ShowMoreBtn";
import { useState } from "react";
export default function Studentspage() {
    const [studentData, setStudentData] = useState([
        1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3,
    ]);
    const [displayedStudentData, setDisplayedStudentData] = useState(
        studentData.slice(0, 10)
    );
    const [csbtn, setcsbtn] = React.useState(false);
    const [csupbtn, setcsupbtn] = React.useState(false);
    const closebuttoncs = (state) => {
        setcsbtn(state);
    };
    const closeupbuttoncs = (state) => {
        setcsupbtn(state);
    };
    return ( <
        >
        <
        HeasderSchool linknumber = { 2 }
        />{" "} <
        div className = "adhmmain" >
        <
        div className = "adhmsearch" >
        <
        input type = "text"
        placeholder = "SearchStudent" / >
        <
        /div>{" "} <
        div className = "createschool" >
        <
        button onClick = {
            () => setcsbtn(true) } > Create Students < /button>{" "} <
        /div>{" "} <
        div className = "adhmschools" > { " " } {
            displayedStudentData.map((item, i) => ( <
                Studentscard closebutton = { closeupbuttoncs }
                key = { i }
                />
            ))
        } { " " } <
        /div>{" "} <
        ShowMoreBtn data = { studentData }
        setDisplayedData = { setDisplayedStudentData }
        />{" "} {
            csbtn ? ( <
                div className = "adhmcspc" >
                <
                CreateStudent closebutton = { closebuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } {
            csupbtn ? ( <
                div className = "adhmcspc" >
                <
                UpdateStudent closebutton = { closeupbuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } <
        /div>{" "} <
        />
    );
}