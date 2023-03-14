import React, { Fragment, useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './pages/signin';
import Dashboard from './pages/dashboard';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [power, setPower] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleVoltageChange = (event) => {
    setVoltage(event.target.value);
  };

  const handleCurrentChange = (event) => {
    setCurrent(event.target.value);
  };

  const handlePowerChange = (event) => {
    setPower(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if password is correct
    if (password === 'robot') {
      setLoggedIn(true);
    } else {
      alert('Invalid password. Please try again.');
    }
  };

  const routes = [
    {
      path:'/',
      components:<Signin/>
    },
    {
      path:'/voltage',
      components:<Dashboard/>
    },
    
  ]

  return (
  
  <BrowserRouter>
    <Routes>
   { routes.map((item,index)=>{
      return (<Route path={item.path} element={item.components}/>)

    })}
    </Routes>
  </BrowserRouter>
  );
}

export default App;




