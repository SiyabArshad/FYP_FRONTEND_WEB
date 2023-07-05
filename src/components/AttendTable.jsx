import { useState } from 'react';
import DatePickers from './DatePicker';

const AttendanceTable = () => {
  const [attendance, setAttendance] = useState([{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
    
  },{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
    
  },{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
    
  },{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
    
  },{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
    
  },{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
    
  },{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
   
  },{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
    
  },{
    rollNo:"19-CS-11",
    name:"Ali Zahid",
}]);

  const handleAttendanceChange = (index, value) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index].status = value;
    setAttendance(updatedAttendance);
  };

  const handleSaveAttendance = () => {
    // You can perform additional logic here to save the attendance data
    console.log(attendance);
  };

  const renderAttendanceTable = () => {
    return attendance.map((student, index) => (
      <tr key={index}>
        <td>{student.rollNo}</td>
        <td>{student.name}</td>
        <td>
          <select
            value={student.status}
            onChange={(e) => handleAttendanceChange(index, e.target.value)}
          >
            <option value="P">Present</option>
            <option value="A">Absent</option>
          </select>
        </td>
      </tr>
    ));
  };

  return (
    <div style={{height:"500px"}}>
      <h2 style={{textAlign:"center"}}>Attendance</h2>
      <div style={{background:"white",width:"200px",marginLeft:"35rem",borderRadius:".2rem",marginTop:".25rem",marginBottom:".25rem"}}>
      <DatePickers/>
      </div>
      <table style={{width:"800px",textAlign:"center"}}>
        <thead>
          <tr>
            <th>ROLL NO</th>
            <th>NAME</th>
            <th>ATTENDENCE</th>
          </tr>
        </thead>
        <tbody>{renderAttendanceTable()}</tbody>
      </table>
      <button style={{position:"relative",right:"-40rem",bottom:"-1rem"}} onClick={handleSaveAttendance}>Save Attendance</button>

    </div>
  );
};

export default AttendanceTable;
