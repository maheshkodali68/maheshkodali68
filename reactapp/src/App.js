import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./Admin-side/AdminDashboard";
import Admin from "./auth/login/Admin";
import User from "./auth/login/User";
import Signup from "./auth/signup/Signup";
import UserDashboard from "./User-side/UserDashboard"

function App(){

    return(
     
             <BrowserRouter> 
              <Routes>
                <Route exact path='/' element={<User/>} />
                <Route path='/admin/login' element={<Admin/>} />
                <Route path='/user/signup' element={<Signup/>} />
                <Route path='/admin/signup' element={<Signup/>} />
                <Route path='/user/dashboard' element={<UserDashboard/>}/>
                <Route path='admin/dashboard' element={<AdminDashboard/>}/>
              </Routes>
        
            </BrowserRouter>
            
          
    )
  
}
export default App;