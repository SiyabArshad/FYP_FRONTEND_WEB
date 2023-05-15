import * as React from "react";
import CreateEvents from "../../components/school/CreateEvents";
import HeasderSchool from "../../components/school/HeasderSchool";
import ShowMoreBtn from "../../components/school/ShowMoreBtn";
export default function Eventspage() {
    const [eventData, setEventData] = React.useState([
        1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3, 1, 2, 3, 4, 5, 5, 6,
        67, 8, 89, 3, 5, 6, 4, 7, 89, 3,
    ]);
    const [displayedEventData, setDisplayedEventData] = React.useState(
        eventData.slice(0, 10)
    );
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
            displayedEventData.map((item, i) => ( <
                div className = "eventsall" >
                <
                span > Event title will be written here. < /span>{" "} <
                button > Delete < /button>{" "} <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        ShowMoreBtn data = { eventData }
        setDisplayedData = { setDisplayedEventData }
        />{" "} {
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