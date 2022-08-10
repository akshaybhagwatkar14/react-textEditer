
// import { component } from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

function App() {

  const [mode, setMode]= useState('light');

  const toggleMode=()=>{
     
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = '#009393'
   
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
     <Router>
< Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
     </Router>

<div className='container my-3' >
< TextForm heading="Enter the text"/>
{/* <About /> */}

     </div>



   </>
  );
}

export default App;
