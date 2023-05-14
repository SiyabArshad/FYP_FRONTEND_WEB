import * as React from "react";
import CreateResult from "../../components/school/CreateResult";
import HeasderSchool from "../../components/school/HeasderSchool";
export default function Results() {
    const [csbtn, setcsbtn] = React.useState(false);
    const closebuttoncs = (state) => {
        setcsbtn(state);
    };
    return ( <
            >
            { " " } <
            HeasderSchool / >
            <
            div className = "adhmmain" >
            <
            div className = "adhmsearch" >
            <
            input type = "text"
            placeholder = "Searchresults" / >
            <
            /div>{" "} <
            div className = "createschool" >
            <
            button onClick = {
                () => setcsbtn(true)
            } > Create Result < /button>{" "} < /
            div > { " " } <
            div className = "parentallevent" > { " " } {
                [
                    1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3, 1, 2, 3, 4, 5,
                    5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3,
                ].map((item, i) => ( <
                    div className = "eventsall" >
                    <
                    span > { " " }
                    11 Standard 2019 Batch Result. { " " } <
                    span style = {
                        { cursor: "pointer", color: "#4285F4" }
                    } > { " " }
                    View { " " } <
                    /span> < /
                    span > <
                    button > Delete < /button>{" "} < /
                    div >
                ))
            } { " " } <
            /div>{" "} {
            csbtn ? ( <
                div className = "adhmcspc" >
                <
                CreateResult closebutton = { closebuttoncs }
                />{" "} < /
                div >
            ) : null
        } { " " } <
        /div>{" "} < /
        >
);
}