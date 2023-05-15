import * as React from "react";
import UpdateExpense from "../../components/school/UpdateExpense";
import Expensecard from "../../components/school/Expensecard";
import CreateExpense from "../../components/school/CreaetExpense";
import HeasderSchool from "../../components/school/HeasderSchool";
import ShowMoreBtn from "../../components/school/ShowMoreBtn";
export default function Expenses() {
    const [expenseData, setExpenseData] = React.useState([
        1, 2, 3, 4, 5, 5, 6, 67, 4, 7, 2, 4, 6, 3, 4, 8, 89, 3, 5, 6, 4, 7, 89, 3,
    ]);
    const [displayedExpenseData, setDisplayedExpenseData] = React.useState(
        expenseData.slice(0, 15)
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
            displayedExpenseData.map((item, i) => ( <
                Expensecard closebutton = { closeupbuttoncs }
                key = { i }
                />
            ))
        } { " " } <
        /div>{" "} <
        ShowMoreBtn data = { expenseData }
        setDisplayedData = { setDisplayedExpenseData }
        />{" "} {
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