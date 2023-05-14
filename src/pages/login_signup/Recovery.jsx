import React, { useState } from "react";
import HeasderSchool from "../../components/school/HeasderSchool";

const Recovery = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const HandleRecover = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return ( <
        >
        <
        HeasderSchool loginpage = "login" / >
        <
        div className = "email-input-page" >
        <
        div className = "email-input-container" >
        <
        h1 > Password Recovery < /h1> <label> Email: </label > { " " } <
        input type = "email"
        className = "email-input"
        value = { email }
        onChange = { handleEmailChange }
        placeholder = "example@example.com"
        required /
        >
        <
        button onClick = { HandleRecover }
        type = "submit" > { " " }
        Recover { " " } <
        /button>{" "} <
        /div>{" "} <
        /div>{" "} <
        />
    );
};

export default Recovery;