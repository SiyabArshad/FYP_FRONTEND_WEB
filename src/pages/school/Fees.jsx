import * as React from "react";
import CreateFee from "../../components/school/CreateFee";
import Feecard from "../../components/school/Feecard";
import UpdateFee from "../../components/school/UpdateFee";
import Feesectionmenubar from "../../components/school/Feesectionmenubar";
import HeasderSchool from "../../components/school/HeasderSchool";
export default function Fees() {
    const [csbtn, setcsbtn] = React.useState(false);
    const [csupbtn, setcsupbtn] = React.useState(false);
    const closebuttoncs = (state) => {
        setcsbtn(state);
    };
    const closeupbuttoncs = (state) => {
        setcsupbtn(state);
    };
    return ( <
        > { " " } <
        HeasderSchool linknumber = { 6 }
        />{" "} <
        div className = "adhmmain" >
        <
        div className = "adhmsearch" >
        <
        input type = "text"
        placeholder = "SearchStudent" / >
        <
        /div>{" "} <
        Feesectionmenubar > < /Feesectionmenubar>{" "} <
        div className = "createschool" >
        <
        button onClick = {
            () => setcsbtn(true) } > Add Fee < /button>{" "} <
        /div>{" "} <
        div className = "adhmschools" > { " " } {
            [1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3].map(
                (item, i) => ( <
                    Feecard closebutton = { closeupbuttoncs }
                    key = { i }
                    />
                )
            )
        } { " " } <
        /div>{" "} {
            csbtn ? ( <
                div className = "adhmcspc" >
                <
                CreateFee closebutton = { closebuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } {
            csupbtn ? ( <
                div className = "adhmcspc" >
                <
                UpdateFee closebutton = { closeupbuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } <
        /div>{" "} <
        />
    );
}