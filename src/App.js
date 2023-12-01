import "./App.css";
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetAccount from "./pages/SingIn";
import GetBackAccount from "./pages/RestoreAccount";
import Settings from "./pages/Settings";
import Applications from "./pages/Applications";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";
import AdminCompany from "./pages/dashboard/adminCompany";
import AdminUser from "./pages/dashboard/adminUsers";
import AdminJobs from "./components/ui/dashboard/dashboardJobs";
import AdminHome from "./pages/dashboard/adminHome";

import AdminJobType from "./components/ui/dashboard/dashboardJobType";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>

        <JobProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings/" element={<Settings />} />
            <Route path="/applications" element={<Applications />} />
          {/* </Routes>
          </JobProvider>
   
        <Routes> */}
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<GetAccount />} />
          <Route path="/login/password/reset" element={<GetBackAccount />} />
          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/admin/company/" element={<AdminCompany />} />
          <Route path="/admin/users/" element={<AdminUser />} />
          <Route path="/admin/jobs/" element={<AdminJobs />} />
          <Route path="/admin/jobtype/" element={<AdminJobType />} />
        
        </Routes>
          </JobProvider>

      </Router>
    </AuthProvider>
  );
}

export default App;
