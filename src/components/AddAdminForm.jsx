import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Input,
  CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import http from "../utils/http";

const AddAdminForm = () => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setload] = useState(false);

  const handleSubmit = async (event) => {
    setload(true);
    event.preventDefault();
    try {
      const { data } = await http.post(
        "/createuser",
        { name, email, phone, address, password, role: "admin", admin: true },
        {
          headers: {
            token: currentUser?.token,
          },
        }
      );
      alert(data?.message);
    } catch (e) {
      console.log(e);
      alert("Failed");
    } finally {
      setload(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "16px 32px",
        height: "70vh",
        overflowY: "scroll",
      }}
    >
      <Typography
        sx={{ color: "#000000" }}
        variant="h4"
        align="center"
        gutterBottom
      >
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
          type="number"
          label="Contact No"
          fullWidth
          value={phone}
          onChange={(e) => setphone(e.target.value)}
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
          type="email"
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

        {load ? (
          <Button disabled className="btn" variant="contained" color="success">
            <CircularProgress size={20} sx={{ color: "white" }} />
          </Button>
        ) : (
          <Button
            className="btn"
            type="submit"
            variant="contained"
            color="success"
          >
            Add Admin
          </Button>
        )}
      </form>
    </Container>
  );
};

export default AddAdminForm;
