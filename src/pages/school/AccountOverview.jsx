import React from "react";
import Marquee from "react-fast-marquee";
import HeasderSchool from "../../components/school/HeasderSchool";

const AccountOverview = () => {
    const feebreakdown = [{
            name: "LAST DATE",
            value: `${new Date().getDate()} of the month`,
        },
        {
            name: "TUTION FEE",
            value: `RS 25000`,
        },
        {
            name: "LIBRARY FEE",
            value: `RS 20000`,
        },
        {
            name: "TRANSPORT FEE",
            value: `RS 12000`,
        },
        {
            name: "SPORTS FEE",
            value: `RS 2000`,
        },
        {
            name: "OTHERS",
            value: `RS 1200`,
        },
    ];
    const paymentHistory = [{
            name: "AMOUNT PAID",
            value: `RS 21439`,
        },
        {
            name: "DATE & TIME",
            value: `${new Date().toLocaleString()}`,
        },
        {
            name: "MONTH",
            value: `${new Date().getMonth() + 1}`,
        },
    ];
    const studemts = [{
            name: "TOTAL STUDENTS",
            value: 10000,
        },
        {
            name: "ACTIVE STUDENTS",
            value: 5000,
        },
    ];
    const teachers = [{
            name: "TOTAL TEACHERS",
            value: 100,
        },
        {
            name: "Each Subject has ",
            value: `7 Teachers`,
        },
    ];
    const events = [
        "Sport Week from coming sunday",
        "Culture Day on 10th september",
        "Public Holiday on 14 August",
        "Sport Week from coming sunday",
        "Culture Day on 10th september",
        "Public Holiday on 14 August",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const biilinghistory = [{
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 0,
            feeStatus: "Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 0,
            feeStatus: "Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 0,
            feeStatus: "Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 0,
            feeStatus: "Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 44654,
            feeStatus: "Not Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 0,
            feeStatus: "Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 2434,
            feeStatus: "Not Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 54663,
            feeStatus: "Not Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 0,
            feeStatus: "Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 34634,
            feeStatus: "Not Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 34634,
            feeStatus: "Not Paid",
        },
        {
            month: months[new Date().getMonth()],
            date: new Date().toLocaleString().slice(0, 8),
            remaining: 34634,
            feeStatus: "Not Paid",
        },
    ];

    return ( <
        >
        <
        HeasderSchool / >
        <
        section className = "overview" >
        <
        div className = "bal_sum" >
        <
        div className = "account_balance" >
        <
        h2 > ACCOUNT BALANCE < /h2>{" "} <
        div className = "feebreakdown" >
        <
        h2 > Fee Breakdown < /h2>{" "} {
            feebreakdown.map((feetype, index) => {
                return ( <
                    ul key = { index } >
                    <
                    div className = "breakdowndata" >
                    <
                    li > { feetype.name }: < /li> <span> {feetype.value} </span > { " " } <
                    /div>{" "} <
                    /ul>
                );
            })
        } { " " } <
        /div>{" "} <
        div className = "paymentHistory" >
        <
        h2 > Recent Payment History < /h2>{" "} {
            paymentHistory.map((Payment, index) => {
                return ( <
                    ul key = { index } >
                    <
                    div className = "breakdowndata" >
                    <
                    li > { Payment.name }: < /li> <span> {Payment.value} </span > { " " } <
                    /div>{" "} <
                    /ul>
                );
            })
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        div className = "account_summary" >
        <
        h2 > ACCOUNT SUMMARY < /h2>{" "} <
        div className = "feebreakdown" >
        <
        h2 > Students < /h2>{" "} {
            studemts.map((studemts, index) => {
                return ( <
                    ul key = { index } >
                    <
                    div className = "breakdowndata" >
                    <
                    li > { studemts.name }: < /li>{" "} <
                    span > { studemts.value } < /span>{" "} <
                    /div>{" "} <
                    /ul>
                );
            })
        } { " " } <
        /div>{" "} <
        div className = "feebreakdown" >
        <
        h2 > Teachers < /h2>{" "} {
            teachers.map((teacher, index) => {
                return ( <
                    ul key = { index } >
                    <
                    div className = "breakdowndata" >
                    <
                    li > { teacher.name }: < /li> <span> {teacher.value} </span > { " " } <
                    /div>{" "} <
                    /ul>
                );
            })
        } { " " } <
        /div>{" "} <
        div className = "feebreakdown" >
        <
        h2 > Upcoming Events < /h2>{" "} <
        Marquee style = {
            { marginLeft: "7rem", width: "70%" } } > { " " } {
            events.map((event, index) => {
                return ( <
                    ul style = {
                        { marginTop: "15px" } } >
                    <
                    li style = {
                        {
                            fontSize: "25px",
                            margin: "0 70px",
                        }
                    } >
                    { " " } { event } { " " } <
                    /li>{" "} <
                    /ul>
                );
            })
        } { " " } <
        /Marquee>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "billinghistory" >
        <
        h2 > BILLING / FEE HISTORY < /h2>{" "} <
        table >
        <
        tr >
        <
        th > MONTH < /th> <th> DATE </th > < th > REMAINING < /th>{" "} <
        th > FEE STATUS < /th>{" "} <
        /tr>{" "} {
            biilinghistory.map((data, index) => {
                return ( <
                    tr >
                    <
                    td > { data.month } < /td> <td> {data.date} </td > { " " } <
                    td > { data.remaining } < /td> <td> {data.feeStatus} </td > { " " } <
                    /tr>
                );
            })
        } { " " } <
        /table>{" "} <
        /div>{" "} <
        /section>{" "} <
        />
    );
};

export default AccountOverview;