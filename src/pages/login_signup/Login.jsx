import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeasderSchool from "../../components/school/HeasderSchool";

const LoginPage = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform authentication or any necessary actions
        console.log("Email:", email);
        console.log("Password:", password);
        navigation("/schoolhome");
    };

    return ( <
        >
        <
        HeasderSchool loginpage = "login" / >
        <
        div className = "login-page" >
        <
        div className = "login-container" >
        <
        h1 > Welcome to Education Portal < /h1>{" "} <
        form onSubmit = { handleSubmit } >
        <
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
        button type = "submit" > Login < /button>{" "} <
        button onClick = {
            () => {
                navigation("/recovery");
            }
        }
        type = "recover" >
        { " " }
        Forget Password ? { " " } <
        /button>{" "} <
        button onClick = {
            () => {
                navigation("/signup");
            }
        }
        type = "signup" >
        { " " }
        Are You New Here ? { " " } <
        /button>{" "} <
        /form>{" "} <
        /div>{" "} <
        /div>{" "} <
        />
    );
};

export default LoginPage;