import * as React from "react";
import CreateFee from "../../components/school/CreateFee";
import Feecard from "../../components/school/Feecard";
import UpdateFee from "../../components/school/UpdateFee";
import Feesectionmenubar from "../../components/school/Feesectionmenubar";
import HeasderSchool from "../../components/school/HeasderSchool";
import ShowMoreBtn from "../../components/school/ShowMoreBtn";
export default function Fees() {
    const [feeData, setFeeData] = React.useState([
        1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3,
    ]);
    const [displayedFeeData, setDisplayedFeeData] = React.useState(
        feeData.slice(0, 10)
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
            displayedFeeData.map((item, i) => ( <
                Feecard closebutton = { closeupbuttoncs }
                key = { i }
                />
            ))
        } { " " } <
        /div>{" "} <
        ShowMoreBtn data = { feeData }
        setDisplayedData = { setDisplayedFeeData }
        />{" "} {
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