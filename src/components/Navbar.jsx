import {NavLink} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"

const Navbar = ({active}) => {

const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
  const MainNav = currentUser?.admin?[
    {name: "classes", url: `/classes`},
    {name: "account manager", url: "/accountmanager"}
  ]:[  
  {name: "classes", url: `/classes`},
  {name: "account manager", url: "/accountmanager"},
   ];
  return (
    <>
      <ul>
        {MainNav.map((item, index) => {
          return (
            <NavLink className={index === active && "active" } to={item.url} key={index}>
              <li>{item.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
