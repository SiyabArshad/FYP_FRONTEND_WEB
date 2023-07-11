import AccountManager from "./components/AccountManager";
import AddAdmin from "./components/AddAdmin";
import AddStudentClass from "./components/AddStudentClass";
import AddTeacher from "./components/AddTeacher";
import Expense from "./components/Expense";
import Sections from "./components/Sections";
import Student from "./components/Students";
import Teacher from "./components/Teacher";
import User from "./components/User";
import Login from "./pages/login_signup/Login";
import Classes from "./pages/school/Classes";
import Home from "./pages/school/Home";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "../src/redux/store"
import { Provider } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import React from "react";
import ResetPassword from "./pages/ResetPassword";
import AddNewStudent from "./components/AddNewStudent";
import TeacherChange from "./components/TeacherChange";

function App() {

  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  );
}

const AppRoutes=()=>{
  const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
  console.log(isAuthenticated,currentUser)
    return(
      <BrowserRouter>
      <Routes>
        {
          !isAuthenticated||currentUser===null||currentUser===undefined?
          <>
          <Route path="/" element={<Login />} />
          <Route path="/uetcs/passwordreset/:id" element={<ResetPassword />} />
          </>
          :
          <>
        <Route path="/" element={<Home />} />
        <Route path="/accountmanager" element={<AccountManager />} />
        <Route path="/students" element={<Student />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/addstudent" element={<AddNewStudent />} />
        <Route path="/enrollment/:classname/:id" element={<AddStudentClass />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/user" element={<User />} />
        <Route path="/updateclass" element={<TeacherChange />} />
       
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:classname/:id" element={<Sections />} />
          
        </>
        }
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
    )  
}
export default App;
