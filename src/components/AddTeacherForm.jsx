import React,{useState} from "react";
import {TextField, Button, Container, Grid,Input, CircularProgress,Typography} from "@mui/material";
import {useSelector,useDispatch} from "react-redux"
import http from "../utils/http"
import ReactLoading from "react-loading"
import { uploadImageToFirebaseStorage } from "../utils/uplaodimagetocloud";

const AddTeacherForm = (props) => {
  const [studentData, setStudentData] = useState({
    name: "",
    address:"",
    phone:"",
    email:"",
    password:"",
    profile:"",
    role:"teacher"
      });
      const [load,setlaod]=React.useState(false)
      const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
      const [imageurl,setimageurl]=React.useState(null)
  

  const handlePictureChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setimageurl(file)
    }
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    setlaod(true)
    try{
      if(imageurl!==null && imageurl!==undefined)
   {
    const downloadedurl = await uploadImageToFirebaseStorage(imageurl);
    studentData.profile=downloadedurl
   }
      const {data}=await http.post("/createteacher",{...studentData},{headers:{
        token:currentUser?.token
      }})
      alert("Added")
    }
    catch(e)
    {
      alert("Failed")
      console.log(e)
    }
    finally{
      setlaod(false)
    }
  };

  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '16px 32px',height:"70vh",overflowY:"scroll" }}>
      <form  onSubmit={handleSubmit}>
      <Typography color={"black"} variant="h4" align="center" gutterBottom>
        Hire a Teacher
      </Typography>
        <Grid container spacing={2}>
        <Input
          type="file"
          onChange={handlePictureChange}
          inputProps={{
            accept: 'image/*',
            id: 'profile-picture',
          }}
          style={{ display: 'none' }}
        />
        <div style={{width:"35rem",marginLeft:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

        {imageurl!==null ? (
                <Typography sx={{maxWidth: "60%", color: "#000000"}}>
                  {imageurl?.name}
                </Typography>
              ) : (
                <Typography sx={{color: "#6B6B6B"}}>No Image Insert</Typography>
              )}
        <label htmlFor="profile-picture">
          <Button component="span"  color="primary">
            Upload Picture
          </Button>
        </label>
        </div>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Teacher Name"
              value={studentData.name}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="phone"
              label="Contact No"
              value={studentData.phone}
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
            <TextField
              name="email"
              label="Email"
              value={studentData.email}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              value={studentData.password}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
          {
            !load?
            <Button  type="submit" variant="contained" color="success">
            Add Student
          </Button>
          :  <Button  variant="contained" color="success">
         <CircularProgress size={20} sx={{color:"white"}}/>
          </Button>
          
          }
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddTeacherForm;
