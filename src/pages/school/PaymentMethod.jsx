import React, { useState } from "react";
import CardForm from "../../components/school/Card";
import AddPayment from "./AddPayment";
import HeasderSchool from "../../components/school/HeasderSchool";

const PaymentMethod = () => {
    const [manual, setManual] = useState(false);

    return ( <
        >
        <
        HeasderSchool linknumber = { 5 }
        />{" "} <
        section >
        <
        h2 className = "paymentheading" > Account Manager / Payment Method < /h2>{" "} <
        div className = "paymentselectionBtn" >
        <
        button onClick = {
            () => {
                setManual(false);
            }
        }
        className = {!manual && "active" } >
        { " " }
        Card { " " } <
        /button>{" "} <
        button className = { manual && "active" }
        onClick = {
            () => {
                setManual(true);
            }
        } >
        { " " }
        Manually { " " } <
        /button>{" "} <
        /div>{" "} <
        div > { " " } {!manual ? < CardForm / > : < AddPayment paymenttype = "manuall" / > } { " " } <
        /div>{" "} <
        /section>{" "} <
        />
    );
};

export default PaymentMethod;