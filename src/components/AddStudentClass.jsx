import { useParams } from "react-router-dom";
import AddStudentForm from "./AddStudentForm";
import Data from "./Data";
import Header from "./Header";
import Navbar from "./Navbar";

const AddStudentClass = () => {
    const param = useParams();
    const VerticalNavData = [
      {name: param.id, url: `/classes/${param.id}`},
      {name: "Add Student", url: `/${param.id}/addstudentclass`},
    ];
  
  return (
    <>
      <div className="homesection">
        <Header Navbar={<Navbar active={0} />} />
        <div className="homearea">
        <Data VerticalNavData={VerticalNavData} active={0} data={<AddStudentForm class={param.id} />} />
      </div>
      </div>
    </>
  );
};

export default AddStudentClass;
