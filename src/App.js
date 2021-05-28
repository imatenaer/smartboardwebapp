import "./App.css";
import Clock from "react-live-clock";
import "moment-timezone";
import React, { Component, useEffect, useState } from 'react'
import Weather from 'simple-react-weather'

function Lunch() {
  //needs to be updated daily by STC, or they could make an array with the entire months lunch from the Taher PDF
  return "LUNCH-HERE";
}

function App() {
    // lat: 44.926076099822076,
    // long: -93.17279580193134,
    //State
    const [apiData, setApiData] =useState({});
    const city = "saint paul";
    //API KEY AND URL
    const apiKey = process.env.REACT_APP_API_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    useEffect(()=>{
      console.log(apiUrl)
      fetch(apiUrl)
        .then((res) => res.json())
        .then(setApiData)
    }, [apiUrl]);
    //kelvin to farhenheit
    const kTF = (k) => {
      return (k - 273.15).toFixed(2);
    }
  return (
    <div className="appBackground">
      <Lunch />
      <br></br>
      <Clock ticking={true} format="hh:mm:ss" />
      <p>{apiData ? kTF(apiData.main.temp):"no data"}</p>
    </div>
  );
}

export default App;
