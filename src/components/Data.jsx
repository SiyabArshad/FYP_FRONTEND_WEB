import VerticalNav from "./VerticalNav";
import {useSelector,useDispatch} from "react-redux"
const Data = ({VerticalNavData,data,active}) => {
  
  return (
    <>
      <VerticalNav VerticalNavData={VerticalNavData} active={active} />
      <div className="content">
        {data}
      </div>
    </>
  );
};

export default Data;
