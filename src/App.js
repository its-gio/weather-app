import React from "react";

import Title from "./components/Title";
import Content from "./components/Content";
import API_KEY from "./Keys";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

export default class App extends React.Component {
  state = {
    inputText: "",
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    err: undefined,
    suggestionList: [],
    suggestionListUpdated: []
  };

  // componentDidMount() {
  //   fetch(endpoint)
  //     // Converting fetched data to json
  //     .then(blob => blob.json())
  //     // Pushing data into suggestionList array
  //     .then(data => this.setState({ suggestionList: [...data] }));
  // }

  updateSearch = e => {
    this.setState({ inputText: e.target.value });
  };

  // Making API call is best with async and await
  getWeather = async e => {
    e.preventDefault();
    // Grabbing city and country front component form
    const location = e.target.location.value;
    const city = "los angeles";
    const country = "us";
    // Making API call
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
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
        err: ""
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        err: "Please enter values"
      });
    }
  };

  // Grabs input values and the cities array as parameters
  findMatches = (wordMatch, cities) => {
    // returns a filtered city array where cities and states are running through a Regex and only one has to match to return
    return cities.filter(place => {
      const regex = new RegExp(wordMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  };

  render() {
    return (
      <div className="content-container">
        <Title />
        <Content
          updateSearch={this.updateSearch}
          getWeather={this.getWeather}
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          desc={this.state.desc}
          err={this.state.err}
          suggestionList={this.state.suggestionList}
          suggestionListUpdated={this.state.suggestionListUpdated}
        />
      </div>
    );
  }
}
