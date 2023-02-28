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
import ProductDetails from "./Pages/ProductDetails/index"
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Basket from "./Pages/Basket";
import Error404 from "./Pages/Error/Error404";
import Admin from "./Pages/Admin";

 function App() {
  return (
    <>
    <Router>
    
      <Navbar/>
      <div className="content">  
        <Routes>
          <Route path="/" exact element={<Products/>}/>
          <Route path="/product/:product_id"  element={<ProductDetails/>}/>
          <Route path="/signin"  element={<Signin/>}/>
          <Route path="/signup"  element={<Signup/>}/>
          <Route path="/profile"  element={<Profile/>}/>
          <Route path="/basket"  element={<Basket/>}/>
          <Route path="/*"  element={<Error404/>}/>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
                <Route
            path="/admin/*"
            admin={true}
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
        </div>
    </Router>
    </>
  );
}


export default App;


