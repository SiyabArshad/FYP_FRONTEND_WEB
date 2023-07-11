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
import CustomSelectOptions from "./CustomSelectOptions";
import CustomAttendanceStatus from "./CustomAttendanceStatus";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  "&:focus": {
    outline: "none",
  },
}));
const AttendTable = () => {
  const param = useParams();
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [search, setsearch] = useState("");
  const [load, setload] = useState(false);
  const [records, setrecords] = useState([]);
  const [status, setstatus] = useState("present");
  const [date, setdate] = React.useState(
    new Date(Date.now()).getUTCFullYear() +
      "-" +
      (new Date(Date.now()).getMonth() + 1) +
      "-" +
      new Date(Date.now()).getDate()
  );
  const getdata = async () => {
    setload(true);
    try {
      const { data } = await http.get(`/enrollment?classId=${param.id}`, {
        headers: {
          token: currentUser?.token,
        },
      });
      setrecords(data?.data);
      console.log(data?.data);
    } catch (e) {
      console.log(e);
    } finally {
      setload(false);
    }
  };
  React.useEffect(() => {
    getdata();
  }, []);
  const markattendance = async (id) => {
    setload(true);
    try {
      const { data } = http.post(
        "/createattendance",
        { date, status, enrollmentId: id },
        {
          headers: {
            token: currentUser?.token,
          },
        }
      );
      alert("Attendance Added");
    } catch (e) {
      alert("Failed");
    } finally {
      setload(false);
    }
  };
  const changestatus = (stat) => {
    setstatus(stat);
  };
  console.log(date);

  return (
    <Container
      style={{
        width: "95%",
        borderRadius: "16px",
        backgroundColor: "white",
        padding: "16px",
        height: "80vh",
        overflowY: "scroll",
      }}
    >
      <Loading visible={load} />
      <div className="searchbox">
        <input
          style={{
            width: "20%",
            height: "50px",
            borderRadius: ".3rem",
            borderWidth: "1px",
          }}
          type="date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
          required
        />
      </div>
      <table className="customers">
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Class</th>
          <th>Status</th>
          <th>Action</th>
          <th>Save</th>
        </tr>
        {records?.map((item, i) => (
          <tr key={i}>
            <td>{item?.student.name}</td>
            <td>{item?.student.rollno}</td>
            <td>{item?.class.classname}</td>
            {/* here status */}
            {/* <td>Present</td> */}
            <CustomAttendanceStatus
              date={date}
              id={item?.id}
              token={currentUser?.token}
            />
            {/* end status */}
            <td>
              <CustomSelectOptions changestatus={changestatus} />
            </td>
            <td>
              <CustomIconButton
                onClick={() => markattendance(item?.id)}
                color="success"
              >
                <Save color="success" />
              </CustomIconButton>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

export default AttendTable;
