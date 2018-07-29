import React from 'react';
import AreaDropdown from './AreaDropdown';
import Weather from './Weather';

const Content = (props) => (
  <div className="content-container__form right">
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
    <AreaDropdown />
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