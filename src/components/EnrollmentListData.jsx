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
import { useParams } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
const CustomIconButton = styled(IconButton)(({ theme }) => ({
  "&:focus": {
    outline: "none",
  },
}));
const EnrollmentListData = () => {
  const param = useParams();
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [search, setsearch] = useState("");
  const [load, setload] = useState(false);
  const [records, setrecords] = useState([]);
  const [maindata, setmaindata] = useState([]);

  const getdata = async () => {
    setload(true);
    try {
      const { data } = await http.get(`/enrollment?classId=${param.id}`, {
        headers: {
          token: currentUser?.token,
        },
      });
      setrecords(data?.data);
      setmaindata(data?.data);
    } catch (e) {
      console.log(e);
    } finally {
      setload(false);
    }
  };
  React.useEffect(() => {
    getdata();
  }, []);
  //delete student function
  const deletestudent = async (id) => {
    const per = confirm("Are you Sure You want to Delete");

    if (per) {
      setload(true);
      try {
        const { data } = await http.put(
          `/updateenrollment`,
          { enrollmentId: id, status: false },
          {
            headers: {
              token: currentUser?.token,
            },
          }
        );
        getdata();
        alert(data?.message);
      } catch (e) {
        console.log(e);
      } finally {
        setload(false);
      }
    }
  };
  //end delete

  //search function
  const handlesearch = async (event) => {
    const { value } = event.target;
    setsearch(value);
    try {
      let temp = maindata;
      if (value === "") {
        setrecords(maindata);
      } else {
        setrecords(temp.filter((item) => item?.student.name.includes(value)));
      }
    } catch (e) {
      console.log(e);
    }
  };
  //end search function
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
        <TextField
          name="search"
          label="Search"
          onChange={(e) => handlesearch(e)}
          value={search}
          color="success"
          sx={{}}
          size="md"
        />
      </div>
      <table className="customers">
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Roll No</th>
          <th>Address</th>
          <th>Class</th>
          <th>Delete</th>
        </tr>
        {records?.map((item, i) => (
          <tr key={i}>
            <td>{item?.student.name}</td>
            <td>{item?.student.phone}</td>
            <td>{item?.student.rollno}</td>
            <td>{item?.student.address}</td>
            <td>{item?.class.classname}</td>
            <td>
              <CustomIconButton
                onClick={() => deletestudent(item?.id)}
                color="warning"
              >
                <DeleteRounded color="warning" />
              </CustomIconButton>
            </td>
          </tr>
        ))}
      </table>
      <div className="searchboxw">
        <Typography color={"black"}>Total Records {records?.length}</Typography>
      </div>
    </Container>
  );
};

export default EnrollmentListData;
