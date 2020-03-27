import React, { Component } from 'react';
import './ResourceForm.css';

class ResourceForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      website: '',
      phoneNumber:'',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      contact: '',
      notes: '',
      category: '',
      subcategory: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      name,
      website,
      phoneNumber,
      street,
      city,
      state,
      zipCode,
      contact,
      notes,
      category,
      subcategory
    } = this.state;
    return (
      <>
        <form acceptCharset='UTF-8'autoComplete='off' className="new-resource-form go-bottom">
          <div className="form-left">
            <div className="input-container">
              <input name='name' type='text' value={name} onChange={this.handleChange} required/>
              <label htmlFor='name' >Resource Name</label>
            </div>
            <div className="input-container">
              <input name='website' type='URL' value={website} onChange={this.handleChange} required/>
              <label htmlFor='website'>Website</label>
            </div>
            <div className="flex-row">
              <div className="input-container">
                <input name='phoneNumber' type='tel' value={phoneNumber} onChange={this.handleChange} required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                <label htmlFor='phoneNumber' >Phone Number</label>
              </div>
            </div>
          </div>
          <div className='address-block form-center'>
            <div className="input-container">
              <input name='street' type='text' className="input-street" value={street} onChange={this.handleChange} required/>
              <label htmlFor='street'>Street</label>
            </div>
            <div className="city-state-zip flex-row">
            <div className="input-container">
              <input name='city' type='text' className="input-city" value={city} onChange={this.handleChange} required/>
              <label htmlFor='city' className="city">City</label>
            </div>
            <div className="input-container">

              <input name='state' type='text' className="input-state" value={state} onChange={this.handleChange} required/>
              <label htmlFor='state'>State</label>
            </div>
            <div className="input-container">

              <input name='zipCode' type='text' className="input-zip" value={zipCode} onChange={this.handleChange} required/>
              <label htmlFor='zipCode'>Zip Code</label>
            </div>
            </div>
          </div>
          <div className="form-right">
            <div className="input-container">
              <input name='category' type='text' value={category} onChange={this.handleChange} required/>
              <label htmlFor='category' >Category</label>
            </div>
            <div className="input-container">
              <input name='subcategory' type='text' value={subcategory} onChange={this.handleChange} required/>
              <label htmlFor='subcategory' >Subcategory</label>
            </div>
            <div className="input-container">
              <input name='contact' type='text' value={contact} onChange={this.handleChange} required/>
              <label htmlFor='contact' >Contact</label>
            </div>
          </div>
          <div className="form-bottom">
            <div className="input-container">
              <input name='notes' type='textarea' value={notes} className="input-notes" onChange={this.handleChange} required/>
              <label htmlFor='notes' >Notes</label>
            </div>
          </div>
        </form>
        <button type="button">Save</button>
      </>
    );
  }
}

export default ResourceForm;
