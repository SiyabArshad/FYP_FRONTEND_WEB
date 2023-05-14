import React from "react";

const Invoices = ({ copytype }) => {
    return ( <
        > { " " } <
        div className = "copyname" >
        <
        h4 > { copytype } < /h4>{" "} <
        /div>{" "} <
        div className = "bankname" >
        <
        h3 > Bank Name < /h3>{" "} <
        /div>{" "} <
        div className = "challan_date" >
        <
        p > Challan No: __________ < /p>{" "} <
        /div>{" "} <
        div className = "challan_date" >
        <
        p > Dated: ____________ { ":       " } < /p>{" "} <
        /div>{" "} <
        div className = "schoolName" > { " " } <
        h1 > School Name < /h1>{" "} <
        /div>{" "} <
        div className = "details" >
        <
        h4 > Mr ____________________________________ < /h4>{" "} <
        /div>{" "} <
        div className = "details" >
        <
        h4 > { " " } { `S/o,D/o` }
        _________________________________ { " " } <
        /h4>{" "} <
        /div>{" "} <
        div className = "details" >
        <
        h4 > Roll no_________________Month__________ < /h4>{" "} <
        /div>{" "} <
        div className = "details" >
        <
        h4 > { " " }
        Address________________________________ { "\n" }
        _______________________________________ { " " } <
        /h4>{" "} <
        /div>{" "} <
        div className = "details" >
        <
        h4 > Cell No________________________________ < /h4>{" "} <
        /div>{" "} <
        table >
        <
        tr >
        <
        th > Type < /th> <th> Amount </th > { " " } <
        /tr>{" "} <
        tr >
        <
        td > Adm / Re - Adm < /td> <td> 32549 </td > { " " } <
        /tr>{" "} <
        tr >
        <
        td > Fee Concession < /td> <td> 32549 </td > { " " } <
        /tr>{" "} <
        tr >
        <
        td > Hostel Fee < /td> <td> 32549 </td > { " " } <
        /tr>{" "} <
        tr > { " " } <
        td > Exam Fee < /td> <td> 32549 </td > { " " } <
        /tr>{" "} <
        tr >
        <
        td > Late Fine Fee < /td> <td> 32549 </td > { " " } <
        /tr>{" "} <
        tr >
        <
        td > Other Fee < /td> <td> 32549 </td > { " " } <
        /tr>{" "} <
        tr className = "total" >
        <
        td > Total < /td> <td> 32549 </td > { " " } <
        /tr>{" "} <
        /table>{" "} <
        div className = "depoositor_details" >
        <
        h3 > Depositor Name: __________________ < /h3>{" "} <
        /div>{" "} <
        div className = "depoositor_details" >
        <
        h3 > CNIC: __________________________ < /h3>{" "} <
        /div>{" "} <
        div className = "depoositor_details cnic" >
        <
        h3 > Depositor Sign: ___________________ < /h3>{" "} <
        /div>{" "} <
        />
    );
};

export default Invoices;