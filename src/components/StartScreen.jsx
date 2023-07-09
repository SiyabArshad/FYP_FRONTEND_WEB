import {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux"
const StartScreen = () => {
  const [isStarter, setIsStarter] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsStarter(false);
    }, 1200);
  }, []);
  return (
    <>
      <div className={isStarter ? "starter" : "starter slideright"}>
        <h2>Welcome To DigiSchool</h2>
        <h5>Digital With Digi</h5>
      </div>
    </>
  );
};

export default StartScreen;
