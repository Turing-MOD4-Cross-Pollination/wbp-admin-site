import React, { Component } from 'react';
import './App.css';
import ResourceForm from '../ResourceForm/ResourceForm';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='App'>
        <ResourceForm />
        {/* <ResoueceList /> */}
      </div>
    );
  }
}
export default App;
