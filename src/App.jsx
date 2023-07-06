import AccountManager from "./components/AccountManager";
import AddAdmin from "./components/AddAdmin";
import AddGrades from "./components/AddGrades";
import AddStudent from "./components/AddStudent";
import AddStudentClass from "./components/AddStudentClass";
import AddTeacher from "./components/AddTeacher";
import Attendence from "./components/Attendence";
import Expense from "./components/Expense";
import Grades from "./components/Grades";
import MainClass from "./components/MainClass";
import Sections from "./components/Sections";
import Student from "./components/Students";
import Subjects from "./components/Subjects";
import Teacher from "./components/Teacher";
import User from "./components/User";
import Login from "./pages/login_signup/Login";
import Classes from "./pages/school/Classes";
import Assignments from "./components/Assignments";
import Home from "./pages/school/Home";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "../src/redux/store"
import { Provider } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import React from "react";
function App() {

  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  );
}

const AppRoutes=()=>{
  const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
    return(
      <BrowserRouter>
      <Routes>
        {
          !isAuthenticated||currentUser===null||currentUser===undefined?
          <Route path="/" element={<Login />} />
:
          <React.Fragment>
        <Route path="/home" element={<Home />} />
        <Route path="/accountmanager" element={<AccountManager />} />
        <Route path="/students" element={<Student />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/:id/addstudentclass" element={<AddStudentClass />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/user" element={<User />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Sections />} />
        <Route path="/classes/:id/:id" element={<Subjects />} />
        <Route path="/classess/:id/:id" element={<MainClass/>} />
        <Route path="/:id/assignments" element={<Assignments/>} />
        <Route path="/:id/attendence" element={<Attendence/>} />
        <Route path="/:id/grades" element={<Grades/>} />
        <Route path="/:id/addgrades" element={<AddGrades/>} />
        </React.Fragment>
        }
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
    )  
}
export default App;
