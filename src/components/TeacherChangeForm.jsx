import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Input,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import http from "../utils/http";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

export default function TeacherChangetForm() {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [teachers, setteachers] = React.useState([]);
  const [teacherId, setteacherId] = React.useState("");
  const [classes, setclasses] = React.useState([]);
  const [classId, setclassId] = React.useState("");

  const [loading, setloadin] = React.useState(false);
  const handleChange = async (event) => {
    setteacherId(event.target.value);
  };

  const handleChangeclass = async (event) => {
    setclassId(event.target.value);
  };

  const getstudentsdata = async () => {
    setloadin(true);
    try {
      const { data } = await http.get("/allteachers", {
        headers: {
          token: currentUser?.token,
        },
      });
      const data2 = await http.get("/allclasses", {
        headers: {
          token: currentUser?.token,
        },
      });
      setteachers(data?.data?.teachers);
      setclasses(data2?.data?.data?.classes);
    } catch (e) {
      console.log(e);
    } finally {
      setloadin(false);
    }
  };
  React.useEffect(() => {
    getstudentsdata();
  }, []);

  const updateclassstatus = async (e) => {
    e.preventDefault();
    setloadin(true);
    try {
      //
      const { data } = await http.put(
        `/changeteacher?token=${currentUser?.token}`,
        {
          id: classId,
          teacherid: teacherId,
        }
      );
      alert(data?.message);
    } catch (e) {
      console.log(e);
    } finally {
      setloadin(false);
    }
  };
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Loading visible={loading} />
      <form
        style={{
          backgroundColor: "white",
          padding: "2rem 1.5rem",
          borderRadius: ".5rem",
        }}
        onSubmit={updateclassstatus}
      >
        <Typography color={"black"} variant="h4" align="center" gutterBottom>
          Change Teacher
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Class</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={classId}
                label="Class"
                onChange={handleChangeclass}
              >
                {classes?.map((item, i) => (
                  <MenuItem key={i} value={item.id}>
                    {item?.classname + item?.section}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={teacherId}
                label="Teacher"
                onChange={handleChange}
              >
                {teachers?.map((item, i) => (
                  <MenuItem key={i} value={item.id}>
                    {item?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success">
              Change
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
