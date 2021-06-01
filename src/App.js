import "./App.css";
import Clock from "react-live-clock";
import "moment-timezone";
import React, { Component, useEffect, useState } from 'react';
import Weather from 'simple-react-weather';

function Lunch() {
  //needs to be updated daily by STC, or they could make an array with the entire months lunch from the Taher PDF
  return "[INSERT LUNCH]";
}

function App() {
    // lat: 44.926076099822076,
    // long: -93.17279580193134,
    //State
    const [apiData, setApiData] = useState(0);
    const city = "saint paul";
    //API KEY AND URL
    const apiKey = "e0828c042afc5bdaaefa6091ab8aba02";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    useEffect(()=>{
      console.log(apiUrl)
      fetch(apiUrl)
        .then((res) => res.json())
        .then(setApiData)
    }, [apiUrl]);

    //kelvin to farhenheit
    var kTF = (k) => ((k * 1.8)-459.67).toFixed(2);

  return (
    <div className="appBackground">
      <h3>Lunch:</h3>
      <Lunch />
      <br></br>
      <Clock ticking={true} format="hh:mm:ss" />
      <p>{apiData.main ? kTF(apiData.main.temp):"no data"}</p>
    </div>
  );
}

export default App;
