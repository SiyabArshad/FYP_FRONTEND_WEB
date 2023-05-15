import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeasderSchool from "../../components/school/HeasderSchool";

const AddPayment = ({ paymenttype }) => {
        const Navigation = useNavigate();
        const [studentName, setStudentName] = useState("");
        const [rollNo, setRollNo] = useState("");
        const [amount, setAmount] = useState("");
        const [month, setMonth] = useState("");
        const [lateFee, setLateFee] = useState("");
        const [otherCharges, setOtherCharges] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            // Perform any necessary validations or submit data to a server
            // Here, you can access the entered values using the state variables
            console.log("Student Name:", studentName);
            console.log("Roll Number:", rollNo);
            console.log("Amount:", amount);
            console.log("Month:", month);
            console.log("Late Fee:", lateFee);
            console.log("Other Charges:", otherCharges);
        };

        return ( <
            > { " " } {
                paymenttype !== "manuall" && < HeasderSchool linknumber = { 5 }
                />}{" "} <
                section >
                    <
                    h2 className = "paymentheading" > { " " } {
                        paymenttype !== "manuall" &&
                            "Account Manager / Payment Method /"
                    } { " " } <
                    span className = { paymenttype === "manuall" && "manualltype" } > { " " }
                Add Payment { " " } <
                /span>{" "} <
                /h2>{" "} <
                form className = "student-payment-form"
                onSubmit = { handleSubmit } >
                    <
                    div className = "form-group" >
                    <
                    label > Student Name: < /label>{" "} <
                    input
                type = "text"
                value = { studentName }
                onChange = {
                    (e) => setStudentName(e.target.value) }
                required
                    /
                    >
                    <
                    /div>{" "} <
                    div className = "form-group" >
                    <
                    label > Roll Number: < /label>{" "} <
                    input
                type = "text"
                value = { rollNo }
                onChange = {
                    (e) => setRollNo(e.target.value) }
                required
                    /
                    >
                    <
                    /div>{" "} <
                    div className = "form-group" >
                    <
                    label > Amount: < /label>{" "} <
                    input
                type = "text"
                value = { amount }
                onChange = {
                    (e) => setAmount(e.target.value) }
                required
                    /
                    >
                    <
                    /div>{" "} <
                    div className = "form-group" >
                    <
                    label > Month: < /label>{" "} <
                    input
                type = "text"
                value = { month }
                onChange = {
                    (e) => setMonth(e.target.value) }
                required
                    /
                    >
                    <
                    /div>{" "} <
                    div className = "form-group" >
                    <
                    label > Late Fee: < /label>{" "} <
                    input
                type = "text"
                value = { lateFee }
                onChange = {
                    (e) => setLateFee(e.target.value) }
                />{" "} <
                /div>{" "} <
                div className = "form-group" >
                    <
                    label > Other Charges: < /label>{" "} <
                    input
                type = "text"
                value = { otherCharges }
                onChange = {
                    (e) => setOtherCharges(e.target.value) }
                />{" "} <
                /div>{" "} <
                div className = "lastbtnarea" >
                    <
                    button
                onClick = {
                    () => {
                        Navigation(
                            "/accountmanager/paymentmethod/addpayment/confirmation"
                        );
                    }
                }
                type = "submit" >
                    { " " }
                Next { " " } <
                /button>{" "} <
                /div>{" "} <
                /form>{" "} <
                /section>{" "} <
                />
            );
        };

        export default AddPayment;