import React, { useState } from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useSelector,useDispatch} from "react-redux"
const FormContainer = styled('div')`
  background-color: #ffffff;
  padding: 20px;
  width:600px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;

const FormTitle = styled('h1')`
  margin-bottom: 20px;
  color:black;
  text-align:center;
`;

const FormInput = styled('div')`
  margin-bottom: 16px;
`;

const FormButton = styled(Button)`
  margin-top: 16px;
  margin-left: 14rem;
  background-color: #45a049;
  &:hover{
    background-color: #285E4F
  }
`;

const AddGradesData = () => {
  const [studentName, setStudentName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [examType, setExamType] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleExamTypeChange = (event) => {
    setExamType(event.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or other actions here
    // Access studentName, rollNumber, examType, and uploadedFile states
    console.log(studentName, rollNumber, examType, uploadedFile);
  };

  return (
    <FormContainer>
      <FormTitle>Add Grades</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <TextField
          sx={{width:"550px"}}
            label="Student Name"
            value={studentName}
            onChange={handleNameChange}
            required
          />
        </FormInput>
        <FormInput>
          <TextField
          sx={{width:"550px"}}
            label="Roll Number"
            value={rollNumber}
            onChange={handleRollNumberChange}
            required
          />
        </FormInput>
        <FormInput>
          <TextField
          sx={{width:"550px"}}
            label="Exam Type"
            value={examType}
            onChange={handleExamTypeChange}
            required
          />
        </FormInput>
        <FormInput>
        <div style={{display:"flex",alignItems:"center"}}>
        <h3 style={{fontSize:"16px",fontWeight:"600",marginRight:"8px",color:"black"}}>Upload Result: </h3>
          <input
          style={{color:"black"}}
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            required
          />
        </div>
        </FormInput>
        <FormButton variant="contained" type="submit">
          Submit
        </FormButton>
      </form>
    </FormContainer>
  );
};

export default AddGradesData;
