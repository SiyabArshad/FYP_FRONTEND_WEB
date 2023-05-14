import React from "react";
import { Link } from "react-router-dom";
import HeasderSchool from "../../components/school/HeasderSchool";

const AccountManager = () => {
    const accounts = [{
            name: "Account Overview",
            url: "/accountmanager/accountoverview",
        },
        {
            name: "Payment Method",
            url: "/accountmanager/paymentmethod",
        },
        {
            name: "Invoice",
            url: "/accountmanager/invoice",
        },
    ];

    return ( <
        > { " " } <
        HeasderSchool / >
        <
        section className = "container" >
        <
        div className = "pagenamediv" >
        <
        h3 className = "pagename" > Account Manager < /h3>{" "} <
        /div>{" "} <
        div className = "accountypearea" > { " " } {
            accounts.map((data, index) => {
                return ( <
                    Link key = { index }
                    to = { data.url } >
                    <
                    div className = "accounttype" >
                    <
                    h2 > { data.name } < /h2>{" "} <
                    /div>{" "} <
                    /Link>
                );
            })
        } { " " } <
        /div>{" "} <
        /section>{" "} <
        />
    );
};

export default AccountManager;