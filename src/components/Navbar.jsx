import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = ({ active }) => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const MainNav = currentUser?.admin
    ? [{ name: "Account", url: "/accountmanager" }]
    : [
        { name: "classes", url: `/classes` },
        { name: "Account", url: "/accountmanager" },
      ];
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {MainNav.map((item, index) => {
          return (
            <NavLink
              className={index === active && "active"}
              style={{
                marginRight: index === 0 ? 10 : 1,
                display: "inline-block",
              }}
              to={item.url}
              key={index}
            >
              <li>{item.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
