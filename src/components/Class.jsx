import { Link } from "react-router-dom"
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  styled,
  Card,
  CardContent
} from "@mui/material";
import {
  Search as SearchIcon,
  DeleteOutline,
  Edit,
  Expand,
  Password,
  Download,
  DeleteOutlineRounded,
  DeleteRounded,
  ArrowRight,
  ArrowLeft,
} from "@mui/icons-material";
import "./componentscss/table.css";
import Loading from "./Loading";
import http from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useMemo } from "react";
import { AccountCircle } from "@mui/icons-material";
import CreateNewClass from "./CreateNewClass";
function Class() {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [load, setload] = useState(false);
  const [records, setrecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
const handleOpenModal = () => {
    setIsModalOpen(true);

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const getrecords=async()=>{
    setload(true)  
    try{
        const{data}=await http.get("/teachers/classes",{
          headers:{
            token:currentUser?.token
          }
        })
        setrecords(data?.data)
      }
      catch(e){
        console.log(e)
      }
      finally{
        setload(false)
      }
  }
  React.useEffect(()=>{
    getrecords()
  },[])
  return (
    <>
        <Container
      style={{
        width: "100%",
        padding: "16px",
        height: "80vh",
        overflowY: "scroll",
      }}
    >
      <Container style={{display:"flex",justifyContent:"flex-end"}}>
        {currentUser?.role==="teacher"&& <Button onClick={handleOpenModal} variant="contained" color="error">Create Class</Button>}
         </Container>
      <Loading visible={load} />
      <Container style={{       
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"90%"
        }}>
       {
        records?.length===0?
           <Typography color={"white"}> No Class Found</Typography> 
       : <Container style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",height:"100%",overflowY:"scroll",cursor:"pointer"}}>
       {
         records?.map((item,i)=>(
          <Link   style={{width:"19%",minHeight:"150px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column',margin:"1rem 1rem"}} key={i} to={`/classes/${item?.classname}/${item?.id}`} >
           <Card >
           <CardContent>
           <Typography sx={{fontWeight:"bold",fontSize:"1.2rem",textAlign:"center"}}>{item?.classname}</Typography>
           <Typography  sx={{textAlign:"center"}}>{item?.section}</Typography>
           </CardContent>
          </Card>
          </Link>
         ))
       }

     </Container>
          }
        </Container>
        <CreateNewClass refreshrec={getrecords} closefunc={handleCloseModal} visible={isModalOpen}/>
      </Container>
  
    </>

  )
}

export default Class
