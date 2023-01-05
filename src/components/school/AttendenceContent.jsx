import React from "react";

const AttendenceContent = () => {
  const studentInfo = [
    { registrationNo: "XX-CS-1", studentName: "Ali Zahid" },
    { registrationNo: "XX-CS-2", studentName: "Siyab Arshad" },
    { registrationNo: "XX-CS-3", studentName: "Inam Ullah" },
    { registrationNo: "XX-CS-4", studentName: "Abdul Muqeet" },
    { registrationNo: "XX-CS-5", studentName: "Moin Bukhari" },
    { registrationNo: "XX-CS-6", studentName: "qwerty" },
    { registrationNo: "XX-CS-7", studentName: "qwerty" },
    { registrationNo: "XX-CS-8", studentName: "qwerty" },
    { registrationNo: "XX-CS-9", studentName: "qwerty" },
    { registrationNo: "XX-CS-10", studentName: "qwerty" },
    { registrationNo: "XX-CS-11", studentName: "qwerty" },
    { registrationNo: "XX-CS-12", studentName: "qwerty" },
    { registrationNo: "XX-CS-13", studentName: "qwerty" },
    { registrationNo: "XX-CS-14", studentName: "qwerty" },
    { registrationNo: "XX-CS-15", studentName: "qwerty" },
    { registrationNo: "XX-CS-16", studentName: "qwerty" },
    { registrationNo: "XX-CS-17", studentName: "qwerty" },
    { registrationNo: "XX-CS-1", studentName: "Ali Zahid" },
    { registrationNo: "XX-CS-2", studentName: "Siyab Arshad" },
    { registrationNo: "XX-CS-3", studentName: "Inam Ullah" },
    { registrationNo: "XX-CS-4", studentName: "Abdul Muqeet" },
    { registrationNo: "XX-CS-5", studentName: "Moin Bukhari" },
    { registrationNo: "XX-CS-6", studentName: "qwerty" },
    { registrationNo: "XX-CS-7", studentName: "qwerty" },
  ];

  return (
    <>
      <div className="attendenceDate">
        <input
          type="date"
          className="feefilterdate"
          style={{ height: "40px", width: "10rem" }}
        />
        <div className="createschool ">
          <button>Download Attendence</button>
        </div>
      </div>
      <table className="attendenceSheet">
        <tbody>
          <tr>
            <th>Sr.N0</th>
            <th>Reg No.</th>
            <th>Student Name</th>
            <th>Attendence</th>
          </tr>
        </tbody>
        {studentInfo.map((student, i) => (
          <tbody key={i}>
            <tr>
              <td>{i + 1}</td>
              <td>{student.registrationNo}</td>
              <td>{student.studentName}</td>
              <td>
                <select style={{ margin: "0 auto" }}>
                  <option value="p">P</option>
                  <option value="a">A</option>
                  <option value="l">L</option>
                </select>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="createschool" style={{ marginRight: "1.6rem" }}>
        <button>Save Attendence</button>
      </div>
    </>
  );
};

export default AttendenceContent;
