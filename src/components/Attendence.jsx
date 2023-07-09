import { useParams } from "react-router-dom";
import Data from "./Data";
import Header from "./Header";
import Navbar from "./Navbar";
import AttendanceTable from "./AttendTable";

import {useSelector,useDispatch} from "react-redux"
const Attendence = () => {
    const param = useParams();
  const VerticalNavData = [
    {name: param.id},
    {name: "Assignments", url: `/${param.id}/assignments`},
    {name: "Attendence", url: `/${param.id}/attendence`},
    
  ];
  
  return (
    <>
    <div className="homesection">
      <Header Navbar={<Navbar active={0} />} />
      <div className="homearea">
        <Data data={<AttendanceTable/>} VerticalNavData={VerticalNavData} active={0} />
      </div>
    </div>
      
    </>
  )
}

export default Attendence
