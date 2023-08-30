import './App.css';
import "tailwindcss/tailwind.css";
import Home from"./pages/Home";
import Login from"./pages/Login";

import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";


function App() {
  return ( 
    // <Home/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </Router>
  );
}

export default App;
