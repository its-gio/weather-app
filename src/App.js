import React from 'react';
import cities from 'cities.json';

import Title from './components/Title';
import Content from './components/Content';
import API_KEY from './Keys';


export default class App extends React.Component {
  state = {
    text: undefined,
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
    const location = e.target.location.value;
    const city = "los-angeles";
    const country = "us";
    // Making API call
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    // Turning API call into json
    const data = await api_call.json();
    if (city && country) {
      // Never directly manipulate state
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        err: ''
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        err: 'Please enter values'
      });
    }
  }

  textUpdate = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    return (
      <div className="content-container">
        <Title />
        <Content
          textUpdate={this.textUpdate}
          getWeather={this.getWeather}
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          desc={this.state.desc}
          err={this.state.err}
          text={this.state.text}
          cities={cities}
        />
      </div>
    )
  }
}