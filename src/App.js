import './App.css';
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetAccount from "./pages/GetAccount";
import GetBackAccount from "./pages/GetBackAccount";
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
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/login/GetAccount" element={<GetAccount/>} />
        <Route path="/login/GetBackAccount" element={<GetBackAccount/>} />
        <Route path="/settings/" element={<Settings/>} />


      </Routes>
    </Router>
  );
}

export default App;
