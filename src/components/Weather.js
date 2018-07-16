import React from 'react';

export default class Weather extends React.Component{
  render(){
    return(
      <div>
        {/* If all conditions are true then <p> will show */}
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
        { this.props.temp && <p>Temprature: {this.props.temp}</p> }
        { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
        { this.props.desc && <p>Conditions: {this.props.desc}</p> }
      </div>
    )
  }
}