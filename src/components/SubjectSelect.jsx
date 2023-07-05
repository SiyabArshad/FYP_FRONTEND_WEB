import React from "react";
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";

const SubjectSelect = () => {
  const [selectedSubject, setSelectedSubject] = React.useState("");
  const Subject = [
    {
      subject: "None",
      value: "",
    },
    {
      subject: "Physics",
      value: "Physics",
    },
    {
      subject: "Chemistry",
      value: "Chemistry",
    },
    {
      subject: "Mathematics",
      value: "Mathematics",
    }
  ];

  

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

 

  return (
    <div style={{display: "flex", justifyContent: "flex-end", gap: "0.8rem"}}>
      <FormControl style={{minWidth: "6rem"}} variant="filled">
        <InputLabel>Subject</InputLabel>
        <Select
          value={selectedSubject}
          onChange={handleSubjectChange}
          label="Subject"
          sx={{background: "#F0F0F0"}}>
          {Subject.map((data, index) => {
            return (
              <MenuItem key={index} value={data.value}>
                {data.subject}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      
    </div>
  );
};

export default SubjectSelect;
