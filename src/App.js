import "./App.css";
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetAccount from "./pages/SingIn";
import GetBackAccount from "./pages/RestoreAccount";
import Settings from "./pages/Settings";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminEmpresa from "./pages/dashboard/dashboardAdmin";
import AdminUsuarios from "./pages/dashboard/dashboardAdminUsuarios";

function App() {
  return (
    <AuthProvider>
      <Router>
        <JobProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings/" element={<Settings />} />
            <Route path="/admin/empresa/" element={<AdminEmpresa />} />
            <Route path="/admin/usuarios/" element={<AdminUsuarios />} />



          </Routes>
        </JobProvider>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<GetAccount />} />
          <Route path="/login/password/reset" element={<GetBackAccount />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
