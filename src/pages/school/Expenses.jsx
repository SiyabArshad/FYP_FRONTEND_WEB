import * as React from "react";
import UpdateExpense from "../../components/school/UpdateExpense";
import Expensecard from "../../components/school/Expensecard";
import CreateExpense from "../../components/school/CreaetExpense";
import HeasderSchool from "../../components/school/HeasderSchool";
export default function Expenses() {
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
        HeasderSchool linknumber = { 8 }
        />{" "} <
        div className = "adhmmain" >
        <
        div className = "adhmsearch" >
        <
        input type = "date" / >
        <
        /div>{" "} <
        div className = "createschool" >
        <
        button onClick = {
            () => setcsbtn(true) } > Add Expense < /button>{" "} <
        /div>{" "} <
        div className = "adhmschools" > { " " } {
            [1, 2, 3, 4, 5, 5, 6, 67, 8, 89, 3, 5, 6, 4, 7, 89, 3].map(
                (item, i) => ( <
                    Expensecard closebutton = { closeupbuttoncs }
                    key = { i }
                    />
                )
            )
        } { " " } <
        /div>{" "} {
            csbtn ? ( <
                div className = "adhmcspc" >
                <
                CreateExpense closebutton = { closebuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } {
            csupbtn ? ( <
                div className = "adhmcspc" >
                <
                UpdateExpense closebutton = { closeupbuttoncs }
                />{" "} <
                /div>
            ) : null
        } { " " } <
        /div>{" "} <
        />
    );
}