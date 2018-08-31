import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input onChange={this.props.textUpdate} type="text" name="location" placeholder="Select Location..." />
                {/* <input type="text" name="country" placeholder="Country..." /> */}
                <button>Get Weather</button>
            </form>
        )
    }
}