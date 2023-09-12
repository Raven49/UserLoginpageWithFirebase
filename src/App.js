import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import "./App.css";
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { auth } from "./firebase";
function App() {
  const [userName, setUserName]= useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      } else setUserName("")
      console.log(user);
    });
  },[])
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App