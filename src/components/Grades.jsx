import { useParams } from "react-router-dom";
import Data from "./Data";
import Header from "./Header";
import Navbar from "./Navbar";
import GradesData from "./GradesData";


const Grades = () => {
    const param = useParams();
    const VerticalNavData = [
      {name: param.id, url: "/classes"},
      {name: "Grades", url: `/${param.id}/grades`},
      {name: "Add Grades", url: `/${param.id}/addgrades`},
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
