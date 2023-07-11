import DatePickers from './DatePicker';
import React, { useState, useMemo } from "react";
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
  Select,
  FormControl,
  InputLabel,MenuItem
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
  Save
} from "@mui/icons-material";
import "./componentscss/table.css";
import Loading from "./Loading";
import http from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import CustomSelectOptions from './CustomSelectOptions';
const CustomIconButton = styled(IconButton)(({ theme }) => ({
  "&:focus": {
    outline: "none",
  },
}));

export default function CustomAttendanceStatus({date,id,token}) {
        const [status,setstaus]=useState("present")
    const getdata=async()=>{
            try{
                const {data}=await http.get(`/attendance/date?token=${token}&&date=${date}&&enrollmentId=${id}`)
                 console.log(data)
                if(data?.success)
                {
                    setstaus(data?.data.attendance.status)
                }
                else
                {
                    setstaus("Nil")
                }
            }
            catch(e){
                console.log(e)
            }
            
    }
    React.useEffect(()=>{
        getdata()
    },[date])
  return (
    <td>{status}</td>
  )
}
