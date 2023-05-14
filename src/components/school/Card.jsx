import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardForm = () => {
    const navigate = useNavigate();
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [ccv, setCcv] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary validations or submit data to a server
        // Here, you can access the entered values using the state variables
        console.log("Card Holder Name:", cardHolderName);
        console.log("Card Number:", cardNumber);
        console.log("Expiry Date:", expiryDate);
        console.log("CCV:", ccv);
    };

    return ( <
        form className = "credit-card-form"
        onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label > Card Holder Name: < /label>{" "} <
        input type = "text"
        value = { cardHolderName }
        onChange = {
            (e) => setCardHolderName(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label > Card Number: < /label>{" "} <
        input type = "text"
        value = { cardNumber }
        onChange = {
            (e) => setCardNumber(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label > Expiry Date: < /label>{" "} <
        input type = "text"
        value = { expiryDate }
        onChange = {
            (e) => setExpiryDate(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label > CCV: < /label>{" "} <
        input type = "text"
        value = { ccv }
        onChange = {
            (e) => setCcv(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "lastbtnarea" >
        <
        button onClick = {
            () => {
                navigate("/accountmanager/paymentmethod/addpayment");
            }
        }
        type = "submit" >
        { " " }
        Proceed { " " } <
        /button>{" "} <
        /div>{" "} <
        /form>
    );
};

export default CardForm;