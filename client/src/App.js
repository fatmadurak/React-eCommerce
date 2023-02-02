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
import Products from "./Pages/Products";


 function App() {
  return (
    <>
    <Router>
    
      <Navbar/>
      <div className="content">  
        <Routes>
          <Route path="/" exact element={<Products/>}/>
          <Route path="/signin" exact element={<Signin/>}/>
          <Route path="/signup" exact element={<Signup/>}/>
        </Routes>
        </div>
    </Router>
    </>
  );
}




export default App;


