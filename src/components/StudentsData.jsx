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

import { AccountCircle } from "@mui/icons-material";
const CustomIconButton = styled(IconButton)(({ theme }) => ({
  "&:focus": {
    outline: "none",
  },
}));
const StudentData = () => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [search, setsearch] = useState("");
  const [load, setload] = useState(false);
  const [records, setrecords] = useState([]);
  // const [page,setpage]=useState(1)
  // const [limit,setlimit]=useState(2)
  const getdata = async (page = 1, limit = 5) => {
    setload(true);
    try {
      const { data } = await http.get(`/students?page=${page}&limit=${limit}`, {
        headers: {
          token: currentUser?.token,
        },
      });
      setrecords(data?.data);
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
        await http.delete(`/deletestudent?id=${id}`, {
          headers: {
            token: currentUser?.token,
          },
        });
        getdata();
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
      const { data } = await http.get(`/students?searchText=${value}`, {
        headers: {
          token: currentUser?.token,
        },
      });
      console.log(data?.data);
      setrecords(data?.data);
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
          <th>Profile</th>
          <th>Delete</th>
        </tr>
        {records?.students?.map((item, i) => (
          <tr key={i}>
            <td>{item?.name}</td>
            <td>{item?.phone}</td>
            <td>{item?.rollno}</td>
            <td>{item?.address}</td>
            <td>
              <Avatar sx={{ width: 50, height: 40 }}>
                {item?.profilePic ? (
                  <img
                    src={item?.profilePic}
                    alt="Avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <AccountCircle sx={{ width: "100%", height: "100%" }} />
                )}
              </Avatar>
            </td>
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
        <Typography color={"black"}>
          Total Records {records?.total} Current Page {records?.page} Total
          Pages {records?.pages}
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CustomIconButton
            disabled={records?.page === 1 || records?.total === 0}
            onClick={() => getdata(records?.page - 1, 5)}
          >
            <ArrowLeft fontSize="large" />
          </CustomIconButton>
          <CustomIconButton
            disabled={records?.page === records?.pages || records?.total === 0}
            onClick={() => getdata(records?.page + 1, 5)}
          >
            <ArrowRight fontSize="large" />
          </CustomIconButton>
        </div>
      </div>
    </Container>
  );
};

export default StudentData;
