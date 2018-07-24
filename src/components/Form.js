import React from 'react';

const Form = (props) => (
  <form onSubmit={props.getWeather} className="content-container__form right" >
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
)

export default Form;