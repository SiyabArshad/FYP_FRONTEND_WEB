import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homeadmin from "./pages/admin/Homeadmin";
import AdminUsers from "./pages/admin/AdminUsers";
// import Alert from "./components/Alert";
// import Heasderadmin from "./components/admin/Heasderadmin";
// import HeasderSchool from "./components/school/HeasderSchool";
import Employees from "./pages/school/Employees";
import SchoolHome from "./pages/school/SchoolHome";
import Studentspage from "./pages/school/Students";
import Eventspage from "./pages/school/Eventspage";
import Classes from "./pages/school/Classes";
import Sections from "./pages/school/Sections";
import Subject from "./pages/school/Subjects";
import Fees from "./pages/school/Fees";
import Expenses from "./pages/school/Expenses";
import Results from "./pages/school/Results";
import SubjectGeneral from "./pages/school/SubjectGeneral";
import SubjectHome from "./pages/school/SubjectHome";
import SubjectAttendence from "./pages/school/SubjectAttendence";
import SubjectAssignmentPending from "./pages/school/SubjectAssignmentPending";
import SubjectAssignmentCompleted from "./pages/school/SubjectAssignmentCompleted";
import AccountManager from "./pages/school/AccountManager";
import AccountOverview from "./pages/school/AccountOverview";
import Invoice from "./pages/school/Invoice";
import PaymentMethod from "./pages/school/PaymentMethod";
import AddPayment from "./pages/school/AddPayment";
import Confirmation from "./pages/school/Confirmation";
import LoginPage from "./pages/login_signup/Login";
import SignUpPage from "./pages/login_signup/SignUp";
import Recovery from "./pages/login_signup/Recovery";

function App() {
    return ( <
        Router > { " " } { /* <Heasderadmin /> <HeasderSchool /> */ } { " " } <
        Routes >
        <
        Route exact path = "/"
        element = { < LoginPage / > }
        />{" "} <
        Route exact path = "/signUp"
        element = { < SignUpPage / > }
        />{" "} <
        Route exact path = "/recovery"
        element = { < Recovery / > }
        />{" "} <
        Route exact path = "/schoolhome"
        element = { < SchoolHome / > }
        />{" "} <
        Route exact path = "/employees"
        element = { < Employees / > }
        />{" "} <
        Route exact path = "/students"
        element = { < Studentspage / > }
        />{" "} <
        Route exact path = "/events"
        element = { < Eventspage / > }
        />{" "} <
        Route exact path = "/classes"
        element = { < Classes / > }
        />{" "} <
        Route exact path = "/classes/:class"
        element = { < Sections / > }
        />{" "} <
        Route exact path = "/dues"
        element = { < Fees / > }
        />{" "} <
        Route exact path = "/expenses"
        element = { < Expenses / > }
        />{" "} <
        Route exact path = "/accountmanager"
        element = { < AccountManager / > }
        />{" "} <
        Route exact path = "/accountmanager/accountoverview"
        element = { < AccountOverview / > }
        />{" "} <
        Route exact path = "/accountmanager/invoice"
        element = { < Invoice / > }
        />{" "} <
        Route exact path = "/accountmanager/paymentmethod"
        element = { < PaymentMethod / > }
        />{" "} <
        Route exact path = "/accountmanager/paymentmethod/addpayment"
        element = { < AddPayment / > }
        />{" "} <
        Route exact path = "/accountmanager/paymentmethod/addpayment/confirmation"
        element = { < Confirmation / > }
        />{" "} <
        Route exact path = "/results"
        element = { < Results / > }
        />{" "} <
        Route exact path = "/classes/:class/:section"
        element = { < Subject / > }
        />{" "} <
        Route exact path = "/admin/home"
        element = { < Homeadmin / > }
        />{" "} <
        Route exact path = "/admin/admins"
        element = { < AdminUsers / > }
        />{" "} <
        Route exact path = "/classes/:class/:section/:subject"
        element = { < SubjectGeneral / > }
        />{" "} <
        Route exact path = "/classes/:class/:section/:subject/home"
        element = { < SubjectHome / > }
        />{" "} <
        Route exact path = "/classes/:class/:section/:subject/assignment/pendings"
        element = { < SubjectAssignmentPending / > }
        />{" "} <
        Route exact path = "/classes/:class/:section/:subject/assignment/completed"
        element = { < SubjectAssignmentCompleted / > }
        />{" "} <
        Route exact path = "/classes/:class/:section/:subject/attendence"
        element = { < SubjectAttendence / > }
        />{" "} <
        /Routes>{" "} <
        /Router>
    );
}

export default App;