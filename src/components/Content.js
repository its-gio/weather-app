import React from "react";
import Form from "./Form";
import LocationComplete from "./LocationComplete";
import Weather from "./Weather";

export default class Content extends React.Component {
  render() {
    return (
      <div className="content-container__form right">
        <Form getWeather={this.props.getWeather} />
        {this.props.suggestionListUpdated.map((location, i) => (
          <LocationComplete key={i} location={location} />
        ))}
        <Weather
          temp={this.props.temp}
          city={this.props.city}
          country={this.props.country}
          humidity={this.props.humidity}
          desc={this.props.desc}
          err={this.props.err}
        />
      </div>
    );
  }
}
