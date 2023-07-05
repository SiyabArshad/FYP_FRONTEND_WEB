import {useState} from "react";
import {TextField, Button, Container, Grid,Input, Typography} from "@mui/material";

const AddStudentForm = (props) => {
  const [studentData, setStudentData] = useState({
    studentName: "",
    rollNo: "",
    className: props.class,
    section: "",
    fatherName: "",
    address:"",
    admNo:"",
    dob: null,
    profilePicture: null,
  });

  const handlePictureChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setStudentData((prevUserData) => ({
          ...prevUserData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    setStudentData((prevData) => ({
      ...prevData,
      dob: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling logic here
    console.log(studentData);
    // Reset the form
    setStudentData({
      studentName: "",
      rollNo: "",
      className: "",
      section: "",
      fatherName: "",
      dob: "",
      profilePicture:null
    });
  };

  return (
    <Container className="container">
      <form  onSubmit={handleSubmit}>
      <Typography color={"black"} variant="h4" align="center" gutterBottom>
        Add Student
      </Typography>
        <Grid container spacing={2}>
        <Input
        required
          type="file"
          onChange={handlePictureChange}
          inputProps={{
            accept: 'image/*',
            id: 'profile-picture',
          }}
          style={{ display: 'none' }}
        />
        <div style={{width:"35rem",marginLeft:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

        {studentData.profilePicture!==null ? <Typography sx={{maxWidth:"60%",color:"#000000"}}>{studentData.profilePicture.name}</Typography>:<Typography sx={{color:"#6B6B6B"}}>No Image Insert</Typography>}
        <label htmlFor="profile-picture">
          <Button component="span"  color="primary">
            Upload Picture
          </Button>
        </label>
        </div>
          <Grid item xs={12}>
            <TextField
              name="studentName"
              label="Student Name"
              value={studentData.studentName}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="fatherName"
              label="Father's Name"
              value={studentData.fatherName}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="rollNo"
              label="Roll No"
              value={studentData.rollNo}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="admNo"
              label="Admission No"
              value={studentData.admNo}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="className"
              label="Class"
              value={studentData.className}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="section"
              label="Section"
              value={studentData.section}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="address"
              value={studentData.address}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <input
              style={{
                width: "100%",
                height: "50px",
                borderRadius: ".3rem",
                borderWidth: "0px",
              }}
              type="date"
              value={studentData.dob}
              onChange={handleDateChange}
              required
            />
            <p>Selected date: {studentData.dob}</p>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Student
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddStudentForm;
