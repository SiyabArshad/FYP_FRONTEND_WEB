import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

import students from "../assets/students.png";
import teacher from "../assets/teacher.png";
import expense from "../assets/budget.png";
import SelectField from "./SelectField";
import { useSelector, useDispatch } from "react-redux";
import http from "../utils/http";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Loading from "./Loading";
const Dashboard = () => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);

  const [studentsCount, setStudentsCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [expenseCount, setExpenseCount] = useState(0);
  const [studentsnumber, setsudentnumber] = useState(0);
  const [teachernumber, setteachernumber] = useState(0);
  const [expensenumber, setexp] = useState(0);
  const [duration, setduration] = useState(6);
  const [financial, setfinancial] = useState([]);
  const [load, setload] = useState(false);
  const callduration = async (state) => {
    setduration(state);
    const fndata = await http.get(`/financial/progress?months=${state}`, {
      headers: {
        token: currentUser?.token,
      },
    });
    setfinancial(fndata?.data?.data);
    console.log(fndata?.data?.data)
  };

  const getcount = async () => {
    setload(true);
    try {
      const scount = await http.get("/studentcount", {
        headers: {
          token: currentUser?.token,
        },
      });
      setsudentnumber(scount?.data?.data?.count);
      setStudentsCount(scount?.data?.data?.count);

      const tcount = await http.get("/teachercount", {
        headers: {
          token: currentUser?.token,
        },
      });

      setteachernumber(tcount?.data?.data?.count);
      setTeacherCount(tcount?.data?.data?.count);
      const lme = await http.get("/lastmonthexpense", {
        headers: {
          token: currentUser?.token,
        },
      });
      setExpenseCount(lme?.data.data);
      setexp(lme?.data.data);
      const fndata = await http.get(`/financial/progress?months=${duration}`, {
        headers: {
          token: currentUser?.token,
        },
      });
      setfinancial(fndata?.data?.data);
    } catch (e) {
      console.log(e);
    } finally {
      setload(false);
    }
  };

  useEffect(() => {
    getcount();
    setStudentsCount(1); // Reset count to 1 on every refresh
    setTeacherCount(1); // Reset count to 1 on every refresh
    setExpenseCount(1); // Reset count to 1 on every refresh
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        studentsCount < studentsnumber ||
        teacherCount < teachernumber ||
        expenseCount < expensenumber
      ) {
        setStudentsCount((prevCount) => prevCount + 45);
        setTeacherCount((prevCount) => prevCount + 45);
        setExpenseCount((prevCount) => prevCount + 45);
      } else {
        clearInterval(interval);
      }
      if (
        studentsCount > studentsnumber ||
        teacherCount > teachernumber ||
        expenseCount > expensenumber
      ) {
        setStudentsCount(studentsnumber);
        setTeacherCount(teachernumber);
        setExpenseCount(expensenumber);
      }
    }, 10); // Increment count every second (adjust as needed)

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
    };
  }, [studentsCount, teacherCount, expenseCount]);

  const tabs = [
    { img: students, name: "STUDENTS", number: studentsCount },
    { img: teacher, name: "TEACHERS", number: teacherCount },
    { img: expense, name: "EXPENSE LAST MONTH", number: expenseCount },
  ];

  return (
    <>
      <div className="dashboard">
        <Loading visible={load} />
        <div className="tabs">
          {tabs.map((tabdata, index) => {
            return (
              <div key={index} className="tab">
                <div className="img-title">
                  <img src={tabdata.img} alt="motarboard" />
                  <h5>{tabdata.name}</h5>
                </div>
                <h3>{tabdata.number}</h3>
              </div>
            );
          })}
        </div>
        <div className="expense_select">
          <h2>Financial Analysis</h2>
          <SelectField duration={callduration} />
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={financial} // Use the fetched data in the chart
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalExpense" stackId="a" fill="#285E4F" />
              <Bar dataKey="totalEarning" stackId="a" fill="#F47560" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
