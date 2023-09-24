import './App.css';
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetAccount from "./pages/SingIn";
import GetBackAccount from "./pages/RestoreAccount";
import Settings from "./pages/Settings";



import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";

//tendriamos q pasar los componentes de clases a componentes funcionales

function App() {
  return ( 
    // <Home/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singin" element={<GetAccount/>} />
        <Route path="/login/password/reset" element={<GetBackAccount/>} />
        <Route path="/settings/" element={<Settings/>} />


      </Routes>
    </Router>
  );
}

export default App;
