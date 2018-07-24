import React from 'react';
import Weather from './Weather';

const Form = (props) => (
  <div className="content-container__form right">
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
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

export default Form;