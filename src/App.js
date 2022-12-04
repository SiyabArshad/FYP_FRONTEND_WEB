
import Homeadmin from "./pages/admin/Homeadmin";
import AdminUsers from "./pages/admin/AdminUsers";
//import Alert from "./components/Alert";
import Heasderadmin from "./components/admin/Heasderadmin";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <Heasderadmin/>
      <Routes>
      <Route exact path="/" element={<Homeadmin/>} />
        <Route exact path="/admin/admins" element={<AdminUsers/>} />
      </Routes>
    </Router>
  );
}

export default App;
