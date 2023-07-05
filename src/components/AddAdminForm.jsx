import  { useState } from 'react';
import { TextField, Button, Container, Typography ,Input } from '@mui/material';

const AddAdminForm = () => {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your form submission logic here
    // For example, you can send the form data to an API endpoint

    // Reset the form fields
    setName('');
    setFatherName('');
    setCnic('');
    setAddress('');
    setEmail('');
    setPassword('');
    setProfilePicture(null);
  };

  return (
    <Container maxWidth="sm" className='adminform'  >
      <Typography sx={{color:"#000000"}} variant="h4" align="center" gutterBottom>
        Add Admin
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Father's Name"
          fullWidth
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="CNIC"
          fullWidth
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Address"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
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
        <div style={{width:"35rem",padding:"5px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

        {profilePicture!==null ? <Typography sx={{maxWidth:"60%",color:"#000000"}}>{profilePicture.name}</Typography>:<Typography sx={{color:"#6B6B6B"}}>No Image Insert</Typography>}
        <label htmlFor="profile-picture">
          <Button component="span"  color="primary">
            Upload Picture
          </Button>
        </label>
        </div>
        <Button  className='btn' type="submit" variant="contained" color="primary">
          Add Admin
        </Button>
      </form>
    </Container>
  );
};

export default AddAdminForm;
