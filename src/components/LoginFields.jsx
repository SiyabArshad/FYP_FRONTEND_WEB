import { useState } from "react";
import lgreenbg from "../assets/light_greenbackground.png";
import Inputs from "./Inputs";
import StartScreen from "./StartScreen";

const LoginFields = () => {
  const [isforget,setIsForget] = useState(false);
  

  return (
    <>
      <section className="loginarea">
        <div className="mainarea">
          <div className="inputarea">
            {!isforget && <Inputs type="login" isForget={isforget} setIsForget={setIsForget} />}
            {isforget&&<Inputs type="forget" isForget={isforget} setIsForget={setIsForget} />}
            <StartScreen  />
          </div>
          <img className="loginimg" src={lgreenbg} />
        </div>
      </section>
    </>
  );
};

export default LoginFields;
