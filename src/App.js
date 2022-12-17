
import Homeadmin from "./pages/admin/Homeadmin";
import AdminUsers from "./pages/admin/AdminUsers";
import Alert from "./components/Alert";
import Heasderadmin from "./components/admin/Heasderadmin";
import Employees from "./pages/school/Employees";
import HeasderSchool from "./components/school/HeasderSchool";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SchoolHome from "./pages/school/SchoolHome";
import Studentspage from "./pages/school/Students";
import Eventspage from "./pages/school/Eventspage";
function App() {
  return (
    <Router>
       {/* <Heasderadmin/>   */}
      <HeasderSchool/> 
      <Routes> 
        <Route exact path="/" element={<SchoolHome/>} />
        <Route exact path="/employees" element={<Employees/>} />
        <Route exact path="/students" element={<Studentspage/>} />
        <Route exact path="/events" element={<Eventspage/>} />
        <Route exact path="/admin/home" element={<Homeadmin/>} />
        <Route exact path="/admin/admins" element={<AdminUsers/>} />
      </Routes>
    </Router>
  );
}

export default App;
