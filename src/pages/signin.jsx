import axios from 'axios';
import React, { useState } from 'react'

function Signin() {
  

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
  
    
  const signIn = ()=>{
    console.log(password)
    axios.post('http://192.168.1.21:12000',{
      username,
      password
    },
    {
    "Content-Type":"application/json",
    })
  }
   
  return (
    <div className="content">

    <div className='login-container'>
                <div className='login-inner'>
                  <h2>
                    Sign In
                  </h2>
                  <form>
                    <label>username: </label>
                    <input onChange={handleUsernameChange}/>
                    <label >password: </label>
                    <input onChange={handlePasswordChange} type="password"/>
                  </form>
                  <button onClick={()=>signIn()}>sign in</button>
                </div>
              </div>
              </div>
  )
}

export default Signin