import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Data from "../../components/Data"
import Class from "../../components/Class";

const Classes = () => {
  const VerticalNavData = [
    {name: "Classes", url: "/classes"},
  ];
  
  return (
    <>
    <div className="homesection">
      <Header Navbar={<Navbar  />} />
      <div className="homearea">
        <Data data={<Class/>} VerticalNavData={VerticalNavData} />
      </div>
    </div>
      
    </>
  )
}

export default Classes
