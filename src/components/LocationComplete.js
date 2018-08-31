import React from 'react';

export default class LocationComplete extends React.Component {


  render() {
    // console.log(this.props.cities[0].country);
    return (
      <div className="content-container__locations-list">
        {this.props.text}
      </div>
    )
  }
}