import React from "react";
import {Select, MenuItem, FormControl, InputLabel} from "@mui/material";

const ClassSectionSelect = () => {
  const [selectedClass, setSelectedClass] = React.useState("");
  const [selectedSection, setSelectedSection] = React.useState("");

  const Class = [
    {
      class: "None",
      value: "",
    },
    {
      class: "1",
      value: "1",
    },
    {
      class: "2",
      value: "2",
    },
    {
      class: "3",
      value: "3",
    },
    {
      class: "4",
      value: "4",
    },
    {
      class: "5",
      value: "5",
    },
  ];

  const Section = [
    {
      section: "None",
      value: "",
    },
    {
        section: "A",
        value: "A",
      },
      {
        section: "B",
        value: "B",
      },
      {
        section: "C",
        value: "C",
      },
      {
        section: "D",
        value: "D",
      },
    
  ];

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  return (
    <div style={{display: "flex", justifyContent: "flex-end", gap: "0.8rem"}}>
      <FormControl style={{minWidth: "6rem"}} variant="filled">
        <InputLabel>Class</InputLabel>
        <Select
          value={selectedClass}
          onChange={handleClassChange}
          label="Class"
          sx={{background: "#F0F0F0"}}>
          {Class.map((data, index) => {
            return (
              <MenuItem key={index} value={data.value}>
                {data.class}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl style={{minWidth: "6rem"}} variant="filled">
        <InputLabel>Section</InputLabel>
        <Select
          value={selectedSection}
          onChange={handleSectionChange}
          label="Section"
          sx={{background: "#F0F0F0"}}>
          
          {
            Section.map((data,index)=>{
                return <MenuItem key={index} value={data.value}> {data.section}</MenuItem>
            })
          }
          
        </Select>
      </FormControl>
    </div>
  );
};

export default ClassSectionSelect;
