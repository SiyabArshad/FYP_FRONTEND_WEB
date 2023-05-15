import React, { useState } from "react";

function ShowMoreBtn({ data, setDisplayedData }) {
    const [visibility, setvisibility] = useState(10);
    const ShowData = () => {
        if (visibility < data.length) {
            const newVisible = visibility + 10;
            const newData = data.slice(0, newVisible);
            setDisplayedData(newData);
            setvisibility(newVisible);
        } else {
            setvisibility(data.length);
        }
    };

    return ( <
        >
        <
        div className = "showmoreBtndiv" > { " " } <
        button onClick = { ShowData }
        className = { visibility !== data.length ? "showmorebtn" : "nomoredata" } >
        { " " } { visibility !== data.length ? "Show More" : "No More Data" } { " " } <
        /button>{" "} <
        /div>{" "} <
        />
    );
}

export default ShowMoreBtn;