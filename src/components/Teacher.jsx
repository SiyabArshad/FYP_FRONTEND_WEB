import Data from "./Data";
import Header from "./Header";
import Navbar from "./Navbar";
import TeacherData from "./TeacherData";

const Teacher = () => {
  const VerticalNavData = [
    {name: "Dashboard", url: "/accountmanager"},
    {name: "Students", url: "/students"},
    {name: "Teachers", url: "/teachers"},
    {name: "Add Student", url: "/addStudent"},
    {name: "Add Teacher", url: "/addTeacher"},
    {name: "Add Admin", url: "/addAdmin"},
    {name: "Add Expense", url: "/expense"},
    {name: "User/Admin", url: "/user"},
  ];
  return (
    <>
      <div className="homesection">
        <Header Navbar={<Navbar active={1} />} />
        <div className="homearea">
        <Data VerticalNavData={VerticalNavData}  data={<TeacherData/>} />
      </div>
      </div>
    </>
  );
};

export default Teacher;
