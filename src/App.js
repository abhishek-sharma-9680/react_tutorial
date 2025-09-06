import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
 const [mode,setMode]= useState(`light`)
 const toggleMode=()=>{
      if(mode==='dark'){
        setMode('light')
        document.body.style.backgroundColor='white';
      }else{
        setMode('dark')
        document.body.style.backgroundColor='#1e1e1e';
      }
 }
  return (
  <>
  <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>

  <div className='container'>
  <TextForm heading ="Enter the text to analyze" mode={mode}/>
  </div>
  
  </>
 
 
  );
}

export default App;
