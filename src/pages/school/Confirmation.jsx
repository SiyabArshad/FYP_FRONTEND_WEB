import React, { useState } from "react";
import HeasderSchool from "../../components/school/HeasderSchool";

const Confirmation = () => {
    const [studentName, setStudentName] = useState("Ali-Zahid");
    const [rollNo, setRollNo] = useState("19-CS-11");
    const [amount, setAmount] = useState("52000");
    const [month, setMonth] = useState("feb");
    const [lateFee, setLateFee] = useState("0");
    const [otherCharges, setOtherCharges] = useState("0");

    const calculateTotal = () => {
        const lateFeeAmount = parseFloat(lateFee) || 0;
        const otherChargesAmount = parseFloat(otherCharges) || 0;
        return parseFloat(amount) + lateFeeAmount + otherChargesAmount;
    };

    const handleConfirmation = () => {
        // Perform any necessary actions upon confirmation
        console.log("Payment confirmed!");
    };

    return ( <
        >
        <
        HeasderSchool / >
        <
        section >
        <
        h2 className = "paymentheading" > { " " }
        Account Manager / Payment Method / Add Payment / Confirmation { " " } <
        /h2>{" "} <
        div className = "payment-summary" >
        <
        h1 > Payment Summary < /h1>{" "} <
        div className = "confirmBtn" >
        <
        button className = "confirm-button"
        onClick = { handleConfirmation } >
        Confirm Payment { " " } <
        /button>{" "} <
        /div>{" "} <
        div className = "summary-item" >
        <
        span className = "label" > Student Name: < /span>{" "} <
        span className = "value" > { studentName } < /span>{" "} <
        /div>{" "} <
        div className = "summary-item" >
        <
        span className = "label" > Roll Number: < /span>{" "} <
        span className = "value" > { rollNo } < /span>{" "} <
        /div>{" "} <
        div className = "summary-item" >
        <
        span className = "label" > Month: < /span>{" "} <
        span className = "value" > { month } < /span>{" "} <
        /div>{" "} <
        div className = "summary-item" >
        <
        span className = "label" > Amount: < /span>{" "} <
        span className = "value" > { amount } < /span>{" "} <
        /div>{" "} <
        div className = "summary-item" >
        <
        span className = "label" > Late Fee: < /span>{" "} <
        span className = "value" > { lateFee } < /span>{" "} <
        /div>{" "} <
        div className = "summary-item" >
        <
        span className = "label" > Other Charges: < /span>{" "} <
        span className = "value" > { otherCharges } < /span>{" "} <
        /div>{" "} <
        hr / >
        <
        div className = "summary-item total" >
        <
        span className = "label" > Total: < /span>{" "} <
        span className = "value" > { calculateTotal() } < /span>{" "} <
        /div>{" "} <
        /div>{" "} <
        /section>{" "} <
        />
    );
};

export default Confirmation;