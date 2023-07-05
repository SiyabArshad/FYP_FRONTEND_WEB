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
import ClassSectionSelect from "./ClassSectionSelect";

const StudentData = () => {
  const [searchText, setSearchText] = useState("");
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "John Doe",
      rollno: "A001",
      class: "10th",
      section: "A",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
    {
      id: 2,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "Jane Smith",
      rollno: "A002",
      class: "10th",
      section: "B",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
    {
      id: 3,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "Alice Johnson",
      rollno: "A003",
      class: "11th",
      section: "A",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
    {
      id: 4,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "Alice Johnson",
      rollno: "A003",
      class: "11th",
      section: "A",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
    {
      id: 5,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "Alice Johnson",
      rollno: "A003",
      class: "11th",
      section: "A",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
    {
      id: 6,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "Alice Johnson",
      rollno: "A003",
      class: "11th",
      section: "A",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
    {
      id: 7,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "Alice Johnson",
      rollno: "A003",
      class: "11th",
      section: "A",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
    {
      id: 8,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "Alice Johnson",
      rollno: "A003",
      class: "11th",
      section: "A",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
    {
      id: 9,
      profilePicture: null,
      admno: 353,
      dob: "12/02/1995",
      name: "Alice Johnson",
      rollno: "A003",
      class: "11th",
      section: "A",
      address: "H#233-C/7 moh shehzad colony near carriage factory rwp",
      fathername: "XYZ",
      phoneno: "1234345467546",
    },
  ]);
  const [updatedData, setUpdatedData] = useState(studentData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUpdatedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    
    handleCloseModal();
  };

  // Function to handle search text change
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic based on searchText and update studentData state
    // Replace the below dummy implementation with your actual search logic
    const filteredStudents = studentData.filter((student) =>
      student.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setStudentData(filteredStudents);
  };

  return (
    <Container className="ST-container">
      <form onSubmit={handleSearchSubmit}>
        <Grid style={{width: "100%"}} container spacing={2} alignItems="center">
          <Grid style={{width: "100%"}} item>
            <TextField
              label="Student Name"
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
      <ClassSectionSelect />
      <div className="ST-data">
        {studentData.map((student) => {
          return (
            <>
              <Paper className="ST-details" key={student.id} elevation={3}>
                <Box p={3}>
                  <Grid container spacing={2}>
                    <Grid
                      sx={{marginLeft: "85px", alignItems: "center"}}
                      item
                      xs={20}>
                      <Avatar
                        src={studentData.profilePicture}
                        sx={{height: "80px", width: "80px"}}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>Name:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{student.name}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>ADM No:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{student.admno}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>Roll No:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{student.rollno}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>Class:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{student.class}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>Section:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{student.section}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>Father Name:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">
                        {student.fathername}
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>Phone #:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{student.phoneno}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>Address:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{student.address}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body1">
                        <strong>DOB:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{student.dob}</Typography>
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
                    Update Student Details
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
                    label="Email"
                    fullWidth
                    name="email"
                    value={updatedData.email}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Roll No"
                    fullWidth
                    name="rollno"
                    value={updatedData.rollno}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Class"
                    fullWidth
                    name="class"
                    value={updatedData.class}
                    onChange={handleInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Section"
                    fullWidth
                    name="section"
                    value={updatedData.section}
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

export default StudentData;
