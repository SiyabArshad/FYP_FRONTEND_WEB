import { useParams } from "react-router-dom";
import AddStudentForm from "./AddStudentForm";
import Data from "./Data";
import Header from "./Header";
import Navbar from "./Navbar";
import {useSelector,useDispatch} from "react-redux"
import EnrollmentForm from "./EnrollmentForm";
const AddStudentClass = () => {
  const param = useParams();
  const VerticalNavData = [
    {name: param.classname, url: `/classes/${param.classname}/${param.id}`},
    {name: "Attendance", url: `/${param.id}/addstudentclass`},
    {name: "Grades", url: `/${param.id}/addstudentclass`},
    {name: "Enroll Student", url: `/enrollment/${param.classname}/${param.id}`},
  ];
  return (
    <>
      <div className="homesection">
        <Header Navbar={<Navbar active={0} />} />
        <div className="homearea">
        <Data VerticalNavData={VerticalNavData} active={0} data={<EnrollmentForm  />} />
      </div>
      </div>
    </>
  );
};

export default AddStudentClass;
