import React from "react";
import Invoices from "../../components/school/Invoices";
import HeasderSchool from "../../components/school/HeasderSchool";

const Invoice = () => {
    return ( <
        >
        <
        HeasderSchool linknumber = { 5 }
        />{" "} <
        section className = "invoice_section" >
        <
        h2 > Account Manager / Invoice < /h2>{" "} <
        div className = "main_area" >
        <
        button > Download Invoice < /button>{" "} <
        div className = "table_area" >
        <
        table >
        <
        tr >
        <
        td > { " " } <
        Invoices copytype = "Student Copy" / > { " " } <
        /td>{" "} <
        td > { " " } <
        Invoices copytype = "School Copy" / > { " " } <
        /td>{" "} <
        td > { " " } <
        Invoices copytype = "Bank Copy" / > { " " } <
        /td>{" "} <
        /tr>{" "} <
        /table>{" "} <
        /div>{" "} <
        /div>{" "} <
        /section>{" "} <
        />
    );
};

export default Invoice;