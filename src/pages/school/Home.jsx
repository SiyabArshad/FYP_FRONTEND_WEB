import { useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation= useNavigate();
  useEffect(()=>{
    setTimeout(()=>{

      navigation("/accountmanager")      
    }
    ,2000)
  })

  return (
    <div className="homesection">
      <Header Navbar={<Navbar />} />
      <div className="homearea">
        <div className="content entry">
          <h1>
            Welcome To <span className="digi">Digi</span>School !
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
