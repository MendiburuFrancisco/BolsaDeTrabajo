import './App.css';
import "tailwindcss/tailwind.css";

import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";

import Home from"./pages/Home";

function App() {
  return ( 
    // <Home/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/login" element={<Home/>} /> */}

      </Routes>
    </Router>
  );
}

export default App;
