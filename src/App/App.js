import React, { Component } from 'react';
import './App.css';
import { getAllData } from '../Utils/APICalls';
import ResourceForm from '../ResourceForm/ResourceForm';
import ResourceItem from '../ResourceItem/ResourceItem';
import header_logo from '../images/header_logo.svg'
import plus from "../images/plus.png"

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
      resourceItemsList = resources.map(el => <ResourceItem resourse={el}/>)
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
          <img src={plus} alt="menu toggle" className={menuClass} onClick={()=>{this.toggleIsMenuOpen()}}/>
        </div>
          <div>
            {isMenuOpen && <ResourceForm />}
          </div>
        </div>
        {resourceItemsList}
      </div>
    );
  }
}
export default App;
