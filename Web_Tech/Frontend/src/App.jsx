import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./views/Shop.jsx"
import SignUp from "./views/SignUp.jsx"
import Login from "./views/Login.jsx"
import Account from "./views/Account.jsx"
import MyItems from "./views/MyItems.jsx"



export default function App() {
  return (
    
      
    <BrowserRouter>

    
        
      <Routes>
      <Route path="/" element={<Shop />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/myitems" element={<MyItems/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}


