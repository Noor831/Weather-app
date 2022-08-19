import React, { useState } from "react";
import styled from "styled-components";
import CityComponents from "./CityComponents";
import Axios from "axios";
import WeatherInfoComponents from "./WeatherInfoComponents";

const API_KEY ="b7dd8639b7fe2a037c253c3112d2af3e"
const Container = styled.div`
display: flex;
flex-direction: column;
margin:auto;
width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
color: black;
margin: 20px auto;
font-size: 18px;
font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather= async(e) => {
    e.preventDefault();
  const response =
  await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
   updateWeather(response.data) 
  };
  return (
  <Container>
     <AppLabel>Noor Weather App</AppLabel>
    {weather?(
    <WeatherInfoComponents weather={weather}/>
    ):(
    <CityComponents updateCity = {updateCity} fetchWeather = {fetchWeather}/>
    )}
    </Container>
  );
}

export default App;
 