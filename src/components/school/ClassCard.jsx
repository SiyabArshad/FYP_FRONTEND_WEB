import { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/colors.scss";

const ClassCard = (props) => {
    const [classActive, setClassActive] = useState(true);
    return ( <
        >
        <
        div className = "scmncont1 class_div" >
        <
        Link className = "class_link"
        to = {
            props.choose === "classes" ?
            "/classes/" + props.class :
                props.choose === "subjects" ?
                props.class :
                props.class
        } >
        <
        h2 className = "empdp clasName" > { props.class } < /h2>{" "} <
        /Link> {
            props.choose !== "subjects" ? ( <
                button className = { classActive ? "secondary" : "redc" }
                onClick = {
                    () => {
                        setClassActive(!classActive);
                    }
                } >
                { classActive ? "Active" : "Disable" } { " " } <
                /button>
            ) : ( <
                div className = "class_TN" >
                <
                h5 > Teacher Name < /h5> <p> Dr.Farrukh Zeeshan </p > { " " } <
                /div>
            )
        } { " " } <
        /div>{" "} <
        />
    );
};

export default ClassCard;