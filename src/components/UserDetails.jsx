import {useState} from "react";
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
} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";

import {Visibility, VisibilityOff} from "@mui/icons-material";

const UserDetails = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    cnic: "123456789",
    fathername: "wqsaudf",
    address: "123 Main Street, City ",
    email: "johndoe@example.com",
    password: "qwerfdsa",
    profilePicture: null,
  });
  const [updatedData, setUpdatedData] = useState(userData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUpdatedData((prevUserData) => ({
          ...prevUserData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUpdatedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    setUserData(updatedData);
    handleCloseModal();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
                src={userData.profilePicture}
                sx={{width: 100, height: 100, margin: "0 auto"}}>
                <AccountCircle sx={{width: 100, height: 100}} />
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                {userData.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                CNIC: {userData.cnic}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Father Name: {userData.fathername}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Address: {userData.address}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Email: {userData.email}
              </Typography>
            </Grid>
            <Grid style={{marginLeft: "2rem", marginTop: "1rem", width: "60%"}}>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={userData.password}
                  disabled
                  endAdornment={
                    <Button onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  }
                />
              </FormControl>
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
              {userData.profilePicture !== null ? (
                <Typography sx={{maxWidth: "60%", color: "#000000"}}>
                  {userData.profilePicture.name}
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
              label="CNIC"
              fullWidth
              name="cnic"
              value={updatedData.cnic}
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
            <TextField
              label="Email"
              fullWidth
              name="email"
              value={updatedData.email}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <FormControl
              style={{width: "95%", marginTop: ".5rem", marginLeft: "1rem"}}>
              <InputLabel>Password</InputLabel>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={updatedData.password}
                onChange={handleInputChange}
                endAdornment={
                  <Button onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                }
                margin="normal"
                variant="outlined"
              />
            </FormControl>
            <Grid
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
                onClick={handleUpdate}>
                Update
              </Button>
              <Button
                style={{background: "#285E4F"}}
                variant="contained"
                onClick={handleCloseModal}>
                Cancel
              </Button>
            </Grid>
          </form>
        </Container>
      </Modal>
    </Container>
  );
};

export default UserDetails;
