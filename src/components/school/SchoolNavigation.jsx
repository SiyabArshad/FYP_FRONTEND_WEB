import * as React from "react";
import { Link } from "react-router-dom";
export default function SchoolNavigation({ activelink, menustate }) {
    const menuitems = [{
            name: "Home",
            url: "/schoolhome",
        },
        {
            name: "Employees",
            url: "/employees",
        },
        {
            name: "Students",
            url: "/students",
        },
        {
            name: "Events",
            url: "/events",
        },
        {
            name: "Classes",
            url: "/classes",
        },
        {
            name: "Account Manager",
            url: "/accountmanager",
        },
        {
            name: "Fees",
            url: "/dues",
        },
        {
            name: "Results",
            url: "/results",
        },
        {
            name: "Expenses",
            url: "/expenses",
        },
        {
            name: "Logout",
            url: "/",
        },
    ];
    //   const [currmenu, setcurrmenu] = React.useState(linknumber);
    return ( <
        div style = {
            { transform: menustate ? "translateX(0)" : "translateX(100%)" } }
        className = "adminnavdiv1" >
        <
        ul > { " " } {
            menuitems.map((item, i) => ( <
                Link key = { i }
                to = { item.url }
                className = "link" >
                <
                li
                //   onClick={() => setcurrmenu(i)}
                style = {
                    { backgroundColor: i === activelink && "#0BCF6D" } } >
                <
                span > { item.name } < /span>{" "} <
                /li>{" "} <
                /Link>
            ))
        } { " " } <
        /ul>{" "} <
        /div>
    );
}