import {NavLink} from "react-router-dom";

const Navbar = ({active}) => {
  const MainNav = [
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
