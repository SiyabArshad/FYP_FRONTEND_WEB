import { useState } from 'react';
import { TextField, Button, Grid, Typography, Input,Container } from '@mui/material';
import {useSelector,useDispatch} from "react-redux"
const AddTeacherForm = () => {
  const [teacherData, setTeacherData] = useState({
    teacherName: '',
    subjectName: '',
    cnic: '',
    phoneNumber: '',
    profilePicture:null
  });

  const handlePictureChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTeacherData((prevUserData) => ({
          ...prevUserData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    setTeacherData({ ...teacherData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can replace this with your own logic
    setTeacherData({
      teacherName: '',
      subjectName: '',
      cnic: '',
      phoneNumber: '',
      profilePicture:null
    });
  };

  return (
    <Container className="container" >
      <form className='teacherform' onSubmit={handleSubmit}>
      <Typography color={"black"} variant="h4" align="center" gutterBottom>
        Add Teacher
      </Typography>
        <Grid container spacing={3}>
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
        <div style={{width:"35rem",marginLeft:"1.7rem",marginTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

        {teacherData.profilePicture!==null ? <Typography sx={{maxWidth:"60%",color:"#000000"}}>{teacherData.profilePicture.name}</Typography>:<Typography sx={{color:"#6B6B6B"}}>No Image Insert</Typography>}
        <label htmlFor="profile-picture">
          <Button component="span"  color="primary">
            Upload Picture
          </Button>
        </label>
        </div>
          <Grid item xs={12}>
            <TextField
              label="Teacher Name"
              name="teacherName"
              value={teacherData.teacherName}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subject Name"
              name="subjectName"
              value={teacherData.subjectName}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="CNIC"
              name="cnic"
              value={teacherData.cnic}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={teacherData.phoneNumber}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="address"
              value={teacherData.address}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Teacher
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddTeacherForm;
