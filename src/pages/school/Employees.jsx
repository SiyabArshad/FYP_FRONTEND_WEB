import * as React from "react";
import CreateEmployee from "../../components/school/CreateEmployee";
import EmployeeCard from "../../components/school/EmployeeCard";
import UpdateEmployee from "../../components/school/UpdateEmployee";
import HeasderSchool from "../../components/school/HeasderSchool";
import ShowMoreBtn from "../../components/school/ShowMoreBtn";
export default function Employees() {
    const [employeeData, setEmployeeData] = React.useState([
        1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3,
    ]);
    const [csbtn, setcsbtn] = React.useState(false);
    const [csupbtn, setcsupbtn] = React.useState(false);
    const [displayedEmployeeData, setDisplayedEmployeeData] = React.useState(
        employeeData.slice(0, 10)
    );
    const closebuttoncs = (state) => {
        setcsbtn(state);
    };
    const closeupbuttoncs = (state) => {
        setcsupbtn(state);
    };
    return ( <
        >
        <
        HeasderSchool linknumber = { 1 }
        />{" "} <
        div className = "adhmmain" >
        <
        div className = "adhmsearch" >
        <
        input type = "text"
        placeholder = "SearchEmployee" / >
        <
        /div>{" "} <
        div className = "createschool" >
        <
        button onClick = {
            () => setcsbtn(true) } > Create Employee < /button>{" "} <
        /div>{" "} <
        div className = "adhmschools" > { " " } {
            displayedEmployeeData.map((item, i) => ( <
                EmployeeCard closebutton = { closeupbuttoncs }
                key = { i }
                />
            ))
        } { " " } <
        /div>{" "} <
        ShowMoreBtn data = { employeeData }
        setDisplayedData = { setDisplayedEmployeeData }
        />{" "} {
            csbtn ? ( <
                div className = "adhmcspc" >
                <
                CreateEmployee closebutton = { closebuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } {
            csupbtn ? ( <
                div className = "adhmcspc" >
                <
                UpdateEmployee closebutton = { closeupbuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } <
        /div>{" "} <
        />
    );
}