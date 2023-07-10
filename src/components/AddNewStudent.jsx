import CreateStudent from "./ CreateStudent";
import Data from "./Data";
import Header from "./Header";
import Navbar from "./Navbar";
import {useSelector,useDispatch} from "react-redux"
const AddNewStudent = () => {
  
  const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
  const VerticalNavData = currentUser?.admin?[
    {name: "Dashboard", url: "/accountmanager"},
    {name: "Students", url: "/students"},
    {name: "Teachers", url: "/teachers"},
    {name: "Add Student", url: "/addStudent"},
    {name: "Add Teacher", url: "/addTeacher"},
    {name: "Add Admin", url: "/addAdmin"},
    {name: "Add Expense", url: "/expense"},
    {name: "User", url: "/user"},
  ]:
  [
    {name: "Students", url: "/students"},
    {name: "Teachers", url: "/teachers"},
    {name: "User", url: "/user"},
  ]
  ;
  return (
    <>
      <div className="homesection">
        <Header Navbar={<Navbar active={1} />} />
        <div className="homearea">
        <Data VerticalNavData={VerticalNavData}  data={<CreateStudent />} />
      </div>
      </div>
    </>
  );
};

export default AddNewStudent;
