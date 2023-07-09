import React,{useState} from "react";
import {
  Grid,
  Typography,
  Button,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Input,
  Container,
  Box,
  Paper,
  Avatar,
  CircularProgress
} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {useSelector,useDispatch} from "react-redux"
import {Visibility, VisibilityOff} from "@mui/icons-material";
import http from "../utils/http"
import ReactLoading from "react-loading"
import { uploadImageToFirebaseStorage } from "../utils/uplaodimagetocloud";

const UserDetails = () => {
  const [load,setlaod]=React.useState(false)
  const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
  const [profile,setprofile]=React.useState({})
  const [imageurl,setimageurl]=React.useState(null)
  const [userData, setUserData] = useState({
    name: "John Doe",
    cnic: "123456789",
    fathername: "wqsaudf",
    address: "123 Main Street, City ",
    email: "johndoe@example.com",
    password: "qwerfdsa",
    profilePicture: null,
  });
  const [updatedData, setUpdatedData] = useState(profile);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setUpdatedData(profile)
    setIsModalOpen(true);

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setimageurl(file)
    }
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUpdatedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async() => {
    setlaod(true)
    try {
   if(imageurl!==null && imageurl!==undefined)
   {
    const downloadedurl = await uploadImageToFirebaseStorage(imageurl);
    updatedData.profile=downloadedurl
   }
      switch(currentUser?.role)
      {
        case "teacher":
          const teacher=await http.put("/updateteacher",{...updatedData},{headers:{
            token:currentUser?.token
          }})
          console.log(teacher?.data)
         break
        case "admin":
          const {data}=await http.put("/updateadminprofile",{...updatedData},{headers:{
            token:currentUser?.token
          }})
          console.log(data)
          break
          
      }
      alert("updated")
  } catch (error) {
    alert("Failed to updated")
    console.error('Error uploading image:', error);
  }
  finally{
    setlaod(false)
    handleCloseModal();
    
  }
   
    
  };


  const getuserprofile=async()=>{
    setlaod(true)
    try{
        switch(currentUser?.role)
        {
          case "teacher":
            const teacher=await http.get("/teacherprofile",{headers:{
              token:currentUser?.token
            }})
            setprofile(teacher?.data?.data)
           break
          case "admin":
            const {data}=await http.get("/adminprofile",{headers:{
              token:currentUser?.token
            }})
            setprofile(data?.data)
            break
            
        }
    }
    catch(e){
      console.log(e)
    }
    finally{
      setlaod(false)
    }
  }
  React.useEffect(()=>{
    getuserprofile()
  },[])
  console.log(profile)
  return (
    <Container className="admindata" maxWidth="sm">
      <Box py={4}>
        <Paper
          elevation={3}
          sx={{p: 2, maxWidth: 400, margin: "0 auto"}}
          align="center">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center">
            <Grid item xs={12}>
              <Avatar
                src={profile?.profile!==""?profile?.profile:userData.profilePicture}
                sx={{width: 100, height: 100, margin: "0 auto"}}>
                <AccountCircle sx={{width: 100, height: 100}} />
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                {profile?.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Email: {profile?.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Phone: {profile?.phone}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Address: {profile?.address}
              </Typography>
            </Grid>
            
          </Grid>
          <Button className="btn" variant="contained" onClick={handleOpenModal}>
            Update
          </Button>
        </Paper>
      </Box>
      <Modal className="model" open={isModalOpen} onClose={handleCloseModal}>
        <Container
          maxWidth="sm"
          style={{
            marginTop: "2rem",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "16px",
          }}>
          <Typography variant="h4" align="center" gutterBottom>
            Update User Details
          </Typography>
          <form>
            <Input
              required
              type="file"
              onChange={handlePictureChange}
              inputProps={{
                accept: "image/*",
                id: "profile-picture",
              }}
              style={{display: "none"}}
            />
            <div
              style={{
                width: "35rem",
                padding: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              {imageurl!==null ? (
                <Typography sx={{maxWidth: "60%", color: "#000000"}}>
                  {imageurl?.name}
                </Typography>
              ) : (
                <Typography sx={{color: "#6B6B6B"}}>No Image Insert</Typography>
              )}
              <label htmlFor="profile-picture">
                <Button component="span" color="primary">
                  Upload Picture
                </Button>
              </label>
            </div>
            <TextField
              label="Name"
              fullWidth
              name="name"
              value={updatedData.name}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Phone"
              fullWidth
              name="phone"
              value={updatedData.phone}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Address"
              fullWidth
              name="address"
              value={updatedData.address}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
       {
        load?            <Grid
        style={{
          justifyContent: "flex-end",
          display: "flex",
          gap: ".7rem",
          marginTop: ".5rem",
        }}>
          
        <Button
          style={{background: "#285E4F"}}
          variant="contained"
          color="primary"
          >
          <CircularProgress size={20} sx={{color:"white"}} />
        </Button>
        </Grid>
        :
            <Grid
              style={{
                justifyContent: "flex-end",
                display: "flex",
                gap: ".7rem",
                marginTop: ".5rem",
              }}>
                
              <Button
                disabled={load}
                style={{background: "#285E4F"}}
                variant="contained"
                color="primary"
                onClick={handleUpdate}>
                Update
              </Button>
              <Button
                disabled={load}
                style={{background: "#285E4F"}}
                variant="contained"
                onClick={handleCloseModal}>
                Cancel
              </Button>

            </Grid>
}
          </form>
        </Container>
      </Modal>
    </Container>
  );
};

export default UserDetails;
