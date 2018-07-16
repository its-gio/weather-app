import React from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "145e1b689df6ae9387c0fea9f65bb355";

export default class App extends React.Component{
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    err: undefined
  }

  // Making API call is best with async and await
  getWeather = async (e) => {
    e.preventDefault();
    // Grabbing city and country front component form
    const city = e.target.city.value;
    const country = e.target.country.value;
    // Making API call
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    // Turning API call into json
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