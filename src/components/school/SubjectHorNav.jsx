import React from "react";

const SubjectHorNav = ({ heading, content }) => {
  return (
    <div className="horizontal">
      <div className="hor_navbar">
        <img src={require("../../assets/images/poster.jpg")} alt="Img" />
        <h2>{heading}</h2>
      </div>
      <hr style={{ width: "90%", marginTop: "0.2rem", marginLeft: "3rem" }} />
      <div className="content">{content}</div>
    </div>
  );
};

export default SubjectHorNav;
