import React from 'react';

const Weather = props => (
    <div>
      {/* If all conditions are true then <p> will show */}
      { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
      { props.temp && <p>Temprature: {props.temp}</p> }
      { props.humidity && <p>Humidity: {props.humidity}</p> }
      { props.desc && <p>Conditions: {props.desc}</p> }
      { props.err && <p>{props.err}</p> }
    </div>
  )

export default Weather;