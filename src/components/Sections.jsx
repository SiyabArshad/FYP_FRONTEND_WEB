import { useParams } from "react-router-dom";
import Data from "./Data";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";


const Sections = () => {
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
        <Data data={<Section />} VerticalNavData={VerticalNavData} active={0} />
      </div>
    </div>
      
    </>
  )
}

export default Sections
