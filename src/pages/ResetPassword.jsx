import React, { isValidElement, useState } from "react";
import { TextField, Button } from "@mui/material";
import Header from "../components/Header";
import http from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [indicator, setindicator] = useState(false);
  // const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
  const { id } = useParams();
  const HandleSubmit = async () => {
    setindicator(true);
    try {
      if (password.length > 5) {
        const { data } = await http.put(
          `/newpassword`,
          { password: password },
          {
            headers: {
              token: id,
            },
          }
        );
        alert(data?.message);
      } else {
        alert("Paswword should be strong");
      }
    } catch (e) {
      console.log(e);
      alert("Tryagain later");
    } finally {
      setindicator(false);
    }
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10rem",
          }}
        >
          <TextField
            sx={{ marginBottom: 1, width: 300 }}
            value={password}
            className="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            disabled={indicator}
            onClick={HandleSubmit}
            className="loginBtn"
            variant="contained"
            color="success"
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}
