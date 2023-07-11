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

export default function GradesData() {
  const param = useParams();
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [enrollmentId, setenrollmentId] = React.useState("");
  const [enrollments, setenrollments] = React.useState([]);
  const [loading, setloadin] = React.useState(false);
  const [total, setstotal] = React.useState(0);
  const [obtained, setObtained] = React.useState(0);
  const [grade, setgrade] = React.useState("A");
  const [subject, setsubject] = React.useState("");
  const handleChange = async (event) => {
    setenrollmentId(event.target.value);
  };

  const getstudentsdata = async () => {
    setloadin(true);
    try {
      const { data } = await http.get(`/enrollment?classId=${param.id}`, {
        headers: {
          token: currentUser?.token,
        },
      });
      setenrollments(data?.data);
      console.log(data?.data);
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
      const { data } = await http.post(
        `/createresult?token=${currentUser?.token}`,
        {
          enrollmentId: enrollmentId,
          subject: subject,
          totalmarks: total,
          obtainedmarks: obtained,
          grade: grade,
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
          width: "35%",
        }}
        onSubmit={updateclassstatus}
      >
        <Typography color={"black"} variant="h4" align="center" gutterBottom>
          Add Result
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Students</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={enrollmentId}
                label="Students"
                onChange={handleChange}
              >
                {enrollments?.map((item, i) => (
                  <MenuItem key={i} value={item.id}>
                    {item?.student.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                value={subject}
                label="Subject"
                onChange={(e) => setsubject(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                value={total}
                label="Total Marks"
                onChange={(e) => setstotal(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                value={obtained}
                label="Obtained Marks"
                onChange={(e) => setObtained(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Grades</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={grade}
                label="Grade"
                onChange={(e) => setgrade(e.target.value)}
              >
                {[
                  "A",
                  "A-",
                  "B+",
                  "B",
                  "B-",
                  "C+",
                  "C",
                  "C-",
                  "D",
                  "F",
                  "I",
                ].map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "1rem" }}>
          <Button
            disabled={subject === "" || enrollmentId === ""}
            type="submit"
            variant="contained"
            color="success"
          >
            Add Result
          </Button>
        </Grid>
      </form>
    </Container>
  );
}
