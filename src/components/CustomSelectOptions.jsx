import DatePickers from "./DatePicker";
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
  InputLabel,
  MenuItem,
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
  Save,
} from "@mui/icons-material";
import "./componentscss/table.css";
import Loading from "./Loading";
import http from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
const CustomIconButton = styled(IconButton)(({ theme }) => ({
  "&:focus": {
    outline: "none",
  },
}));

export default function CustomSelectOptions({ changestatus }) {
  const [status, setstatus] = useState("present");

  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel color="success" id="demo-simple-select-label">
          Status
        </InputLabel>
        <Select
          color="success"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={(e) => {
            changestatus(e.target.value);
            setstatus(e.target.value);
          }}
        >
          {["present", "absent"]?.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
