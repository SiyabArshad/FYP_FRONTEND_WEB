import * as React from "react";
import CreateEvents from "../../components/school/CreateEvents";
import HeasderSchool from "../../components/school/HeasderSchool";
export default function Eventspage() {
    const [csbtn, setcsbtn] = React.useState(false);
    const closebuttoncs = (state) => {
        setcsbtn(state);
    };
    return ( <
        >
        <
        HeasderSchool linknumber = { 3 }
        />{" "} <
        div className = "adhmmain" >
        <
        div className = "adhmsearch" >
        <
        input type = "text"
        placeholder = "Searchevents" / >
        <
        /div>{" "} <
        div className = "createschool" >
        <
        button onClick = {
            () => setcsbtn(true) } > Create Event < /button>{" "} <
        /div>{" "} <
        div className = "parentallevent" > { " " } {
            [
                1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3, 1, 2, 3, 4, 5,
                5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3,
            ].map((item, i) => ( <
                div className = "eventsall" >
                <
                span > Event title will be written here. < /span>{" "} <
                button > Delete < /button>{" "} <
                /div>
            ))
        } { " " } <
        /div>{" "} {
            csbtn ? ( <
                div className = "adhmcspc" >
                <
                CreateEvents closebutton = { closebuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } <
        /div>{" "} <
        />
    );
}