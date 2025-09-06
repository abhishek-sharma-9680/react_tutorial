import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
 const [mode,setMode]= useState(`light`);
 const [alert,setAlert]=useState(null);
 const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        
        setTimeout(() => {
          setAlert(null);
        }, 3000);
 }
 const toggleMode=()=>{
      if(mode==='dark'){
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enabled","success");
      }else{
        setMode('dark')
        document.body.style.backgroundColor='#1e1e1e';
        showAlert("dark mode has been enabled","success");
      }
 }
  return (
  <>
  <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container'>
  <TextForm heading ="Enter the text to analyze" mode={mode}/>
  </div>
  
  </>
 
 
  );
}

export default App;
