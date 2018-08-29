import React from 'react';
import Form from './Form';
import LocationComplete from './LocationComplete';
import Weather from './Weather';

const Content = (props) => (
  <div className="content-container__form right">
    <Form getWeather={props.getWeather} />
    <LocationComplete cities={props.cities} />
    <Weather
      temp={props.temp}
      city={props.city}
      country={props.country}
      humidity={props.humidity}
      desc={props.desc}
      err={props.err}
    />
  </div>
)

export default Content;