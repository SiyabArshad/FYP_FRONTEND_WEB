import {useState} from "react";
import {
  TextField,
  Container,
  Grid,
  Typography,
  IconButton,
  Box,
  Paper,
  Avatar,
  Button,
  Modal,
} from "@mui/material";
import {Search as SearchIcon} from "@mui/icons-material";
import SubjectSelect from "./SubjectSelect";
import {useSelector,useDispatch} from "react-redux"
const TeacherData = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Dummy data for teacher list
  const teachers = [
      {id: 1, name: "John Doe",cnic:"934892395250549" ,teacherid: "A001", subject: "physics",address:"H#233-C/7 carriage factory rwp",phoneNo:"12347546"},
      {id: 2, name: "John Doe",cnic:"934892395250549" ,teacherid: "A001", subject: "mathematics",address:"H#233-C/7 carriage factory rwp",phoneNo:"1234345467546"},
      {id: 3, name: "John Doe",cnic:"934892395250549" ,teacherid: "A001", subject: "math",address:"H#233-C/7 carriage factory rwp",phoneNo:"1234345467546"},
      // Add more teacher data as needed
  ];


  const [teacherData, setStudentData] = useState(teachers);
  const [updatedData, setUpdatedData] = useState(teacherData);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUpdatedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle search text change
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic based on searchText and update teacherData state
    // Replace the below dummy implementation with your actual search logic
    const filteredStudents = teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setStudentData(filteredStudents);
  };

  const handleUpdate = () => {
    
    
    handleCloseModal();
  };

  

  return (
    <Container className="ST-container">
      <form onSubmit={handleSearchSubmit}>
        <Grid style={{width: "100%"}} container spacing={2} alignItems="center">
          <Grid style={{width: "100%"}} item>
            <TextField
              label="Teacher Name"
              variant="filled"
              value={searchText}
              onChange={handleSearchTextChange}
              sx={{background: "#ffffff", borderRadius: "10px"}}
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleSearchSubmit}>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>
      </form>
      <SubjectSelect/>
      <div className="ST-data">
        {teacherData.map((teacher) => {
          return (
            <>
            <Paper className="ST-details" key={teacher.id} elevation={3}>
              <Box p={3}>
                <Grid container spacing={2}>
                  <Grid
                    sx={{marginLeft: "85px", alignItems: "center"}}
                    item
                    xs={20}>
                    <Avatar
                      src="../assets/pic1.avif"
                      sx={{height: "80px", width: "80px"}}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">
                      <strong>Name:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{teacher.name}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">
                      <strong>Teacher ID:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{teacher.teacherid}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">
                      <strong>Subject:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{teacher.subject}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">
                      <strong>CNIC:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{teacher.cnic}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">
                      <strong>Phone #:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{teacher.phoneNo}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">
                      <strong>Address:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">
                    {teacher.address}
                    </Typography>
                  </Grid>
                  <Grid>
                      <Button
                        onClick={handleOpenModal}
                        sx={{
                          marginLeft: "6rem",
                          marginTop: "1rem",
                          background: "#285E4F",
                        }}
                        type="submit"
                        variant="contained"
                        color="primary">
                        Update
                      </Button>
                    </Grid>
                  
                </Grid>
              </Box>
            </Paper>
            <Modal
                className="model"
                open={isModalOpen}
                onClose={handleCloseModal}>
                <Container
                  maxWidth="sm"
                  style={{
                    marginTop: "2rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "16px",
                  }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Update Teacher Details
                  </Typography>
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
                    label="Phone No"
                    fullWidth
                    name="phoneno"
                    value={updatedData.phoneno}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                  />

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
                </Container>
              </Modal>
            </>
          );
        })}

        <div className="btns">
          <Button
            variant="contained"
            color="primary"
            disableElevation
            sx={{background: "green", marginRight: "10px"}}>
            Previous
          </Button>
          <Button
            sx={{background: "green"}}
            variant="contained"
            color="primary"
            disableElevation>
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default TeacherData;
