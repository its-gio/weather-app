import React from "react";

export default class LocationComplete extends React.Component {
  render() {
    return (
      <div className="content-container__locations-list">
        <ul className="suggestions">
          <li>{this.props.location}</li>
        </ul>
      </div>
    );
  }
}
