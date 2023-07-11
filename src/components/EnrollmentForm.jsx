import React,{useState} from "react";
import {TextField, Button, Container, Grid,Input, Typography,Select,InputLabel,MenuItem,FormControl,CircularProgress} from "@mui/material";
import {useSelector,useDispatch} from "react-redux"
import http from "../utils/http"
import Loading from "./Loading";
import { useParams } from "react-router-dom";
export default function EnrollmentForm() {
    const param = useParams();
    const handleSubmit=async(event)=>{
    event.preventDefault()
    setloadin(true)
    try{
        
         const {data}=await http.post("/createenrollment",{studentId,classId:param.id},{headers:{token:currentUser?.token}})
        alert(data?.message)
    }
    catch{
        alert("Enrollment Failed")
    }
    finally{
        setloadin(false)
    }
  }
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [students,setstudents]=React.useState([])
  const [studentId, setstudentId] = React.useState('');
  const [loading,setloadin]=React.useState(false)
  const handleChange = async(event) => {
    setstudentId(event.target.value);
   
  };

  const getstudentsdata=async()=>{
    setloadin(true)
    try{
        const {data}=await http.get("/studentlist",{
            headers:{
                token:currentUser?.token
            }
        })
        setstudents(data?.data?.students)
    }
    catch(e){
        console.log(e)
    }
    finally{
        setloadin(false)
    }
  }
React.useEffect(()=>{
    getstudentsdata()
},[])
    return (
    <Container style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"}}>
        <Loading visible={loading}/>
    <form  style={{backgroundColor:"white",padding:"2rem 1.5rem",borderRadius:".5rem"}} onSubmit={handleSubmit}>
    <Typography color={"black"} variant="h4" align="center" gutterBottom>
      Enroll new Student
    </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
           <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Student</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={studentId}
          label="Student"
          onChange={handleChange}
        >
            {
                students?.map((item,i)=>(
                    <MenuItem key={i} value={item.id}>{item?.name}</MenuItem>
                ))
            }

          
        </Select>
      </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="success">
            Enroll
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
  )
}
