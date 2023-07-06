import {NavLink, useNavigation} from "react-router-dom";
import {useDispatch} from "react-redux"
import { login,logout } from "../redux/auth/authActions";
const VerticalNav = ({VerticalNavData,active},navigation) => {
  const dispatch=useDispatch()
// const navigation=useNavigation()
  return (
    <>
      <div className="verticalnavbar">
        <ul>
          {VerticalNavData.map((item, index) => {
            return (
              <NavLink  className={index === active&&"active"} to={item.url} key={index}>
                <li>{item.name}</li>
              </NavLink>
            );
          })}
          <li onClick={()=>{
            dispatch(logout())
            // navigation("/")
            window.location.href = "/";
          }} style={{cursor:"pointer"}}>Logout</li>
        </ul>
      </div>
    </>
  );
};

export default VerticalNav;
