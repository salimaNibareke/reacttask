import React from 'react'
import './App.css';
import {useState} from 'react';



const App = () => {

  const [firstName , setfirstName] = useState('');
  const [lastName , setlastName] = useState('');
  const handleChange = event =>{
    setfirstName(event .target.value);
  };
  const Change = event =>{
    setlastName(event .target.value);
  };



  return (
    <div>
      <center>
     <input type="text" placeholder='FirstName' onChange={handleChange} value={firstName}/> <br></br><br></br>
     <input type="text" placeholder='LastName' onChange={Change} value={lastName}/> 
    <h1>FirstName:{firstName}</h1>
    <h1>LastName:{lastName}</h1>
    </center>
    </div>
  );
}

export default App

