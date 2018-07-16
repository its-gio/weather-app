import React from 'react';

export default class Form extends React.Component{
  render(){
    return(
      <form>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
      </form>
    )
  }
}