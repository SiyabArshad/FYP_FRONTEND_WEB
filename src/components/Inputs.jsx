import {TextField, Button} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import http from "../utils/http"
import Loading from "./Loading";
import { isValidEmail,isValidPassword } from "../utils/validators";
import {useDispatch} from "react-redux"
import { login } from "../redux/auth/authActions";
const Inputs = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [indicator,setindicator]=useState(false)
  const navigation = useNavigate();
  const dispatch=useDispatch()
  const HandleSubmit = () => {
    if (props.type === "login") {
      if(isValidEmail(email)&&isValidPassword(password))
        {
          LoginFunction()
        }
        else
        {
          alert("Kindly Provide Complete Credentials")
        }
    } else {
      if(isValidEmail(email))
      {
        ForgotFunction()
      }
      else
      {
        alert("Provide Email Address")
      }
      props.setIsForget(false);
    }
  };
const LoginFunction=async()=>{
  setindicator(true)
  try{
      const {data}=await http.post("/login",{email,password})
      if(data?.success===true&&data?.data?.role==="admin"||data?.data?.role==="teacher")
      {
        dispatch(login(data?.data))
       }
      else
      {
        alert("Login Failed Try again later!")
      }
  }
  catch(e){
    console.log(e)
  }
  finally{
    setindicator(false)
  }
}
const ForgotFunction=async()=>{
  setindicator(true)
  try{
      const {data}=await http.post("/passlink",{email})
      if(data?.success===true)
      {
        alert(data?.message)
       }
      else
      {
        alert("Login Failed Try again later!")
      }
  }
  catch(e){
    console.log(e)
  }
  finally{
    setindicator(false)
  }
}
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
        disabled={indicator}
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
