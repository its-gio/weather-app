import React from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "145e1b689df6ae9387c0fea9f65bb355";

export default class App extends React.Component{
  // Making api call is best with async and await
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=94555,us&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render(){
    return(
      <React.Fragment>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </React.Fragment>
    )
  }
}