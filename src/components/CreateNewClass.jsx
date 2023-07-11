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
import Loading from "./Loading";

export default function CreateNewClass({closefunc,visible,refreshrec}) {
    const [load,setlaod]=React.useState(false)
  const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
const [classname,setclassname]=useState("")
const [section,setsection]=useState("")
const createaClass=async()=>{
    setlaod(true)
    try{
      const{data}=  await http.post("/createclass",{classname,section},{
            headers:{
                token:currentUser?.token
            }
        })
        refreshrec()
            alert(data?.message)
    }
    catch(e){
        console.log(e)
        alert("Failed")
    }
    finally{
        setlaod(false)
    }
}
  return (
    <Modal className="model" open={visible} onClose={closefunc}>
    <Container
      maxWidth="sm"
      style={{
        marginTop: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "16px",
      }}>
      <Typography variant="h4" align="center" gutterBottom>
        Create a New Class
      </Typography>
      <form>
     
        <TextField
          label="ClassName"
          fullWidth
          name="classname"
          value={classname}
          onChange={(e)=>setclassname(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Section"
          fullWidth
          name="Section"
          value={section}
          onChange={(e)=>setsection(e.target.value)}
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
            onClick={createaClass}
            >
            Create
          </Button>
          <Button
            disabled={load}
            style={{background: "#285E4F"}}
            variant="contained"
            onClick={closefunc}>
            Cancel
          </Button>

        </Grid>
}
      </form>
    </Container>
  </Modal>
  )
}
