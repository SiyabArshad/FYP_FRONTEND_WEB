import {NavLink} from "react-router-dom";

const VerticalNav = ({VerticalNavData,active}) => {
  
  
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
        </ul>
      </div>
    </>
  );
};

export default VerticalNav;
