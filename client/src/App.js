import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";



 function App() {
  return (
    <>
    <Router>
      <div>  
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
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


