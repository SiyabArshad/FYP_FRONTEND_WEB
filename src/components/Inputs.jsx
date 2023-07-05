import {TextField, Button} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Inputs = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const HandleSubmit = () => {
    if (props.type === "login") {
      console.log(email);
      console.log(password);
      navigation("/home");
    } else {
      console.log(email);
      props.setIsForget(false);
    }
  };

  return (
    <>
      <h3 className="login">
        {props.type === "login" ? "LOGIN !" : "FORGET PASSWORD"}
      </h3>
      <div className="inputs">
        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="outlined-basic"
          label="Email"
          variant="outlined"
        />
        {props.type === "login" && (
          <TextField
            value={password}
            className="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        )}
        <Button
          onClick={HandleSubmit}
          className="loginBtn"
          variant="contained"
          color="success">
          {props.type === "login" ? "Login" : "Forget"}
        </Button>
        <Button
          onClick={() => {
            props.setIsForget(!props.isForget);
          }}
          className={props.type === "login" ? "forgetBtn" : "rememberBtn"}>
          {props.type !== "login"
            ? "Remember your password?"
            : "forget password?"}
        </Button>
      </div>
    </>
  );
};

export default Inputs;
