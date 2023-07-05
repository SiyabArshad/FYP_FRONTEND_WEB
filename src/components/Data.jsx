import VerticalNav from "./VerticalNav";

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
