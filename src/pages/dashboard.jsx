import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [voltage,setVoltage] = useState(0);
  const [current,setCurrent] = useState(0);
  const [power,setPower] = useState(0);
  const [date,setDate] = useState(new Date());
  const [cleaningTime, setCleaningTime] = useState(''); // added state for cleaning time
  const [powerLastCleaned, setPowerLastCleaned] = useState(0); // added state for power last cleaned

  useEffect(()=>{
    axios.get('http://192.168.1.11:3000/').then((res)=>{
      console.log(res.data)
      setVoltage(res.data[0].voltage)
    }).catch((err)=>{
      console.log(err)
    })
  },[]);

  const data=[
    {
      dates:1,
      time:333,
      current:333,
      voltage:333,
      power:333,
    }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <div className="dashboard.Tech">
        <h2>Power and Voltage and Current Readings</h2>
        <table>
          <thead>
            <tr>
              <th>dates</th>
              <th>Time</th>
              <th>Current</th>
              <th>Voltage</th>
              <th>Power</th>
            </tr>
          </thead>
          <tbody>
            {data.map((reading) => (
              <tr key={reading._id}>
                <td>{reading.dates}</td>
                <td>{reading.time}</td>
                <td>{reading.current}</td>
                <td>{reading.voltage} V</td>
                <td>{reading.power}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="dashboard">
          <h2>Cleaning Information</h2>
          <p>Time of last cleaning: {cleaningTime}</p>
          <p>Power at last cleaning: {powerLastCleaned} W</p>
          <p>How long the cleaning was done: </p>
        </div>

        <DatePicker onChange={(date)=>{console.log(date)}}/>
        <h1>{date.toLocaleDateString()}</h1>
      </div>
    </Box>
  );
}

export default Dashboard;



