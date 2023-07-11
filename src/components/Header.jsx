import lwhitebg from "../assets/light_whitebackground.png";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ Navbar }) => {
  return (
    <>
      <header>
        <div>
          <img className="logo" src={lwhitebg} />
          <h2 className="headertext">
            Digi<span className="headerschooltxt">School</span>
          </h2>
        </div>
        {Navbar}
      </header>
    </>
  );
};

export default Header;
