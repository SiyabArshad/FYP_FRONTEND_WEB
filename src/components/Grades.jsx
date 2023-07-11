import { useParams } from "react-router-dom";
import Data from "./Data";
import Header from "./Header";
import Navbar from "./Navbar";
import GradesData from "./GradesData";
import {useSelector,useDispatch} from "react-redux"

const Grades = () => {
    const param = useParams();
    const VerticalNavData = [
      {name: param.classname, url: `/classes/${param.classname}/${param.id}`},
      {name: "Attendance", url: `/attendance/${param.classname}/${param.id}`},
      {name: "Grades", url: `/grades/${param.classname}/${param.id}`},
      {name: "Enroll Student", url: `/enrollment/${param.classname}/${param.id}`},
    ];
  return (
    <>
    <div className="homesection">
      <Header Navbar={<Navbar active={0} />} />
      <div className="homearea">
        <Data data={<GradesData/>} VerticalNavData={VerticalNavData} active={0} />
      </div>
    </div>
    </>
  )
}

export default Grades
