import React, { Component } from 'react';
import './App.css';
import { getAllData } from '../Utils/APICalls';
import ResourceForm from '../ResourceForm/ResourceForm';
import ResourceItem from '../ResourceItem/ResourceItem';
import header_logo from '../images/header_logo.svg'
import plus from "../images/plus.png"
import results from '../Utils/data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      resources: [],
      isMenuOpen:false
    };
  }

  componentDidMount() {
    this.getDataWithConnection()
  }

  getDataWithConnection = async () => {
    let response = await getAllData();
    let resources = []
    if (response === undefined) {
      resources = results.data.resources
    } else {
     resources = response.data.resources
    }
    this.setState({ resources });
  };

  toggleIsMenuOpen () {
    console.log('here')
    let {isMenuOpen} = this.state
    isMenuOpen = !isMenuOpen
    this.setState({isMenuOpen})
  }

  render() {
    let {resources, isMenuOpen} = this.state
    let resourceItemsList = []
    if (resources.length!==0){
      resourceItemsList = resources.map(el => <ResourceItem resource={el}/>)
    }
    let menuClass = this.state.isMenuOpen ? 'menu-toggle-open':'menu-toggle' 

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={header_logo} alt = "Women's Bean Project Logo" />
          <h1 className='App-title'>
            Resource List Managment
          </h1>
        </header>
        <div className="App-form">
        <div className="image-container">
          <img src={plus} alt="menu toggle button" className={menuClass} onClick={()=>{this.toggleIsMenuOpen()}}/>
        </div>
          <div className="resource-form">
            {isMenuOpen && <ResourceForm />}
          </div>
        </div>
        <div className="container-table">
          <table className="resource-list">
            <tr>
              <th>

              </th>
              <th>Resource</th>
              <th>Website</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Contact</th>
              <th>Notes</th>
              <th>Category</th>
              <th>Subcategory</th>
              
            </tr>
            {resourceItemsList}
          </table>
        </div>
      </div>
    );
  }
}
export default App;
