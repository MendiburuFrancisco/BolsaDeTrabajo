import "./App.css";
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetAccount from "./pages/SingIn";
import GetBackAccount from "./pages/RestoreAccount";
import Settings from "./pages/Settings";
import UploadedJobs from "./pages/UploadedJobs";
import Applications from "./pages/Applications";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";
 

import AdminUser from "./pages/dashboard/adminUsers";
import AdminCompany from "./pages/dashboard/adminCompany";
import AdminJob from "./pages/dashboard/adminJobs";
import AdminHome from "./pages/dashboard/adminHome";
import AdminJobType from "./pages/dashboard/adminJobTypes";
import AdminRol from "./pages/dashboard/adminRoles";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>

        <JobProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings/" element={<Settings />} />
            <Route path="/jobs" element={<UploadedJobs />} />
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
          <Route path="/admin/jobs/" element={<AdminJob />} />
          <Route path="/admin/jobtype/" element={<AdminJobType />} />  
          <Route path="/admin/roles/" element={<AdminRol />} />
        </Routes>
          </JobProvider>

      </Router>
    </AuthProvider>
  );
}

export default App;
