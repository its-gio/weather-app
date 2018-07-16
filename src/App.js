import React from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

export default class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Title />
        <Form />
        <Weather />
      </React.Fragment>
    )
  }
}