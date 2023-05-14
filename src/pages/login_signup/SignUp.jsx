import React, { useState } from "react";
import HeasderSchool from "../../components/school/HeasderSchool";

const SignUpPage = () => {
    const [studentName, setStudentName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform sign-up or any necessary actions
        console.log("Student Name:", studentName);
        console.log("Roll Number:", rollNo);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    };

    return ( <
        >
        <
        HeasderSchool loginpage = "login" / >
        <
        div className = "sign-up-page" >
        <
        div className = "sign-up-container" >
        <
        h1 > Create an Account < /h1>{" "} <
        form onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label > Student Name: < /label>{" "} <
        input type = "text"
        value = { studentName }
        onChange = {
            (e) => setStudentName(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label > Roll Number: < /label>{" "} <
        input type = "text"
        value = { rollNo }
        onChange = {
            (e) => setRollNo(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label > Email: < /label>{" "} <
        input type = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label > Password: < /label>{" "} <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        label > Confirm Password: < /label>{" "} <
        input type = "password"
        value = { confirmPassword }
        onChange = {
            (e) => setConfirmPassword(e.target.value) }
        required /
        >
        <
        /div>{" "} <
        button type = "submit" > Sign Up < /button>{" "} <
        /form>{" "} <
        /div>{" "} <
        /div>{" "} <
        />
    );
};

export default SignUpPage;