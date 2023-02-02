import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";



 function App() {
  return (
    <>
    <Router>

      <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
   
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
        </div>
    </Router>
    </>
  );
}



export default App;


