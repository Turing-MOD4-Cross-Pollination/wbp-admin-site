import React, { Component } from 'react';
import './App.css';
import { getAllData } from '../Utils/APICalls';
import ResourceForm from '../ResourceForm/ResourceForm';
import ResourceItem from '../ResourceItem/ResourceItem'


class App extends Component {
  constructor() {
    super();
    this.state = {
      resources: [],
      isMenuOpen:true
    };
  }

  componentDidMount() {
    this.getDataWithConnection()
  }

  getDataWithConnection = async () => {
    let response = await getAllData();
    if (response === undefined) {
      response = []
    }
    this.setState({ resources: response });
  };

  render() {
    let {resources, isMenuOpen} = this.state
    let resourceItemsList = []
    if (resources.length!==0){
      resourceItemsList = resources.map(el => <ResourceItem resourse={el}/>)
    }

    return (
      <div className='App'>
        {isMenuOpen && <ResourceForm />}
        {resourceItemsList}
      </div>
    );
  }
}
export default App;
