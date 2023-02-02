import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Signin from "./Pages/Auth/Signin";
import Signup from "./Pages/Auth/SignUp";



 function App() {
  return (
    <>
    <Router>
    
      <Navbar/>
      <div className="content">  
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/signin" exact element={<Signin/>}/>
          <Route path="/signup" exact element={<Signup/>}/>
        </Routes>
        </div>
    </Router>
    </>
  );
}

function Home(){

  return <h1>Home</h1>
}


export default App;


