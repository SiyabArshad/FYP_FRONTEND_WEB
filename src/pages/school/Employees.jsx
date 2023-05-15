import * as React from "react";
import CreateEmployee from "../../components/school/CreateEmployee";
import EmployeeCard from "../../components/school/EmployeeCard";
import UpdateEmployee from "../../components/school/UpdateEmployee";
import HeasderSchool from "../../components/school/HeasderSchool";
export default function Employees() {
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
            [1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3].map(
                (item, i) => ( <
                    EmployeeCard closebutton = { closeupbuttoncs }
                    key = { i }
                    />
                )
            )
        } { " " } <
        /div>{" "} {
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