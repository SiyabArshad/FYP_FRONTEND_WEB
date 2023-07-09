import {useEffect, useState} from "react";
import {ResponsiveBar} from "@nivo/bar";

import students from "../assets/students.png";
import teacher from "../assets/teacher.png";
import expense from "../assets/budget.png";
import SelectField from "./SelectField";
import {useSelector,useDispatch} from "react-redux"
const Dashboard = () => {
  let studentsnumber = 1000;
  let teachernumber = 100;
  let expensenumber = 50000;
  const [studentsCount, setStudentsCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [expenseCount, setExpenseCount] = useState(0);

  useEffect(() => {
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
    {img: students, name: "STUDENTS", number: studentsCount},
    {img: teacher, name: "TEACHERS", number: teacherCount},
    {img: expense, name: "EXPENSE LAST MONTH", number: expenseCount},
  ];
  

  const Data = [
    {
      title: "JAN",
      Stationary: 112,
      StationaryColor: "hsl(70, 70%, 50%)",
      Exams: 13,
      ExamsColor: "hsl(323, 70%, 50%)",
      Sports: 101,
      SportsColor: "hsl(151, 70%, 50%)",
      Others: 10,
      OthersColor: "hsl(155, 70%, 50%)",
      // fries: 178,
      // friesColor: "hsl(359, 70%, 50%)",
      // donut: 84,
      // donutColor: "hsl(253, 70%, 50%)",
    },
    {
      title: "FEB",
      Stationary: 110,
      StationaryColor: "hsl(70, 70%, 50%)",
      Exams: 113,
      ExamsColor: "hsl(323, 70%, 50%)",
      Sports: 111,
      SportsColor: "hsl(151, 70%, 50%)",
      Others: 30,
      OthersColor: "hsl(155, 70%, 50%)",
      // kebab: 0,
      // kebabColor: "hsl(155, 70%, 50%)",
      // fries: 178,
      // friesColor: "hsl(359, 70%, 50%)",
      // donut: 84,
      // donutColor: "hsl(253, 70%, 50%)",
    },
    {
      title: "MAR",
      Stationary: 29,
      StationaryColor: "hsl(70, 70%, 50%)",
      Exams: 138,
      ExamsColor: "hsl(323, 70%, 50%)",
      Sports: 221,
      SportsColor: "hsl(151, 70%, 50%)",
      Others: 5,
      OthersColor: "hsl(155, 70%, 50%)",
      // kebab: 0,
      // kebabColor: "hsl(155, 70%, 50%)",
      // fries: 178,
      // friesColor: "hsl(359, 70%, 50%)",
      // donut: 84,
      // donutColor: "hsl(253, 70%, 50%)",
    },
    {
      title: "APR",
      Stationary: 101,
      StationaryColor: "hsl(70, 70%, 50%)",
      Exams: 91,
      ExamsColor: "hsl(323, 70%, 50%)",
      Sports: 111,
      SportsColor: "hsl(151, 70%, 50%)",
      Others: 20,
      OthersColor: "hsl(155, 70%, 50%)",
      // kebab: 0,
      // kebabColor: "hsl(155, 70%, 50%)",
      // fries: 178,
      // friesColor: "hsl(359, 70%, 50%)",
      // donut: 84,
      // donutColor: "hsl(253, 70%, 50%)",
    },
    {
      title: "MAY",
      Stationary: 12,
      StationaryColor: "hsl(70, 70%, 50%)",
      Exams: 153,
      ExamsColor: "hsl(323, 70%, 50%)",
      Sports: 201,
      SportsColor: "hsl(151, 70%, 50%)",
      Others: 0,
      OthersColor: "hsl(155, 70%, 50%)",
      // kebab: 0,
      // kebabColor: "hsl(155, 70%, 50%)",
      // fries: 178,
      // friesColor: "hsl(359, 70%, 50%)",
      // donut: 84,
      // donutColor: "hsl(253, 70%, 50%)",
    },
    {
      title: "JUNE",
      Stationary: 122,
      StationaryColor: "hsl(70, 70%, 50%)",
      Exams: 13,
      ExamsColor: "hsl(323, 70%, 50%)",
      Sports: 221,
      SportsColor: "hsl(151, 70%, 50%)",
      Others: 0,
      OthersColor: "hsl(155, 70%, 50%)",
      // kebab: 0,
      // kebabColor: "hsl(155, 70%, 50%)",
      // fries: 178,
      // friesColor: "hsl(359, 70%, 50%)",
      // donut: 84,
      // donutColor: "hsl(253, 70%, 50%)",
    },
    {
      title: "JULY",
      Stationary: 12,
      StationaryColor: "hsl(70, 70%, 50%)",
      Exams: 113,
      ExamsColor: "hsl(323, 70%, 50%)",
      Sports: 21,
      SportsColor: "hsl(151, 70%, 50%)",
      Others: 0,
      OthersColor: "hsl(155, 70%, 50%)",
      // kebab: 0,
      // kebabColor: "hsl(155, 70%, 50%)",
      // fries: 178,
      // friesColor: "hsl(359, 70%, 50%)",
      // donut: 84,
      // donutColor: "hsl(253, 70%, 50%)",
    },
    
    
  ];


  return (
    <>
      <div className="dashboard">
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
        <div className="expense_select" >
          <h2>Expense Analysis</h2>
          <SelectField />
        </div>
        <div className="chart">
          <ResponsiveBar
            data={Data}
            keys={["Stationary", "Exams", "Sports","Others"]}
            indexBy="title"
            margin={{top: 50, right: 130, bottom: 50, left: 60}}
            padding={0.3}
            valueScale={{type: "linear"}}
            indexScale={{type: "band", round: true}}
            colors={{scheme: "nivo"}}
            tooltip={({ id, value,index}) => (
        <div
          style={{
            background: '#285E4F', // Specify the desired background color
            color: '#FFFFFF', // Specify the desired text color
            padding: '10px',
            borderRadius:"1rem",
            textAlign:"center"
          }}
        >
          <strong>{id} - {Data[index].title}</strong>: {value} <br/>
          <strong>Total: {Data[index].Stationary+Data[index].Exams+Data[index].Sports+Data[index].Others}</strong>
        </div>
      )}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "fries",
                },
                id: "dots",
              },
              {
                match: {
                  id: "sandwich",
                },
                id: "lines",
              },
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "DURATION",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 18,
              legend: "EXPENSE",
              legendPosition: "middle",
              legendOffset: -40,
              
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) =>
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
