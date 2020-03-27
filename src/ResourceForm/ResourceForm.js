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
        <form acceptCharset='UTF-8'autoComplete='off' className="new-resource-form">
          <div className="form-left">
            <div className="flex-row">
              <label htmlFor='name' hidden>Resource</label>
              <input name='name' type='text' value={name} placeholder="Resource Name" onChange={this.handleChange} required/>
            </div>
            <div className="flex-row">
              <label htmlFor='website' hidden>Website</label>
              <input name='website' type='text' value={website} placeholder="Website" onChange={this.handleChange}/>
            </div>
            <div className="flex-row">
              <label htmlFor='phoneNumber' hidden>Phone Number</label>
              <input name='phnoeNumber' type='text' value={website} placeholder="Phone Number" onChange={this.handleChange}/>
            </div>
          </div>
          <div className='address-block form-center'>
            <div className="flex-row">
            <label htmlFor='street' className="street" hidden>Street</label>
            <input name='street' type='text' className="input-street" value={street} placeholder="Street Address" onChange={this.handleChange}/>
            </div>
            <div className="city-state-zip flex-row">
              <label htmlFor='city' className="city" hidden>City</label>
              <input name='city' type='text' className="input-city" value={city} placeholder="City"onChange={this.handleChange}/>
              <label htmlFor='state' hidden>State</label>
              <input name='state' type='text' className="input-state"value={state} placeholder="State"onChange={this.handleChange}/>
              <label htmlFor='zipCode' hidden>Zip Code</label>
              <input name='zipCode' type='text' className="input-zip" value={zipCode} placeholder="Zip Code" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-right">
            <div className="flex-row">
              <label htmlFor='contact' hidden>Contact</label>
              <input name='contact' type='text' value={contact} placeholder="Contact" onChange={this.handleChange}/>
            </div>
            <div className="flex-row">
            <label htmlFor='category' hidden>Category</label>
            <input name='category' type='text' value={category} placeholder="Category" onChange={this.handleChange} required/>
            </div>
            <div className="flex-row">
            <label htmlFor='subcategory' hidden>Subcategory</label>
            <input name='subcategory' type='text' value={subcategory} placeholder="Subcategory" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-bottom">
            <label htmlFor='notes' hidden >Notes</label>
            <input name='notes' type='text' value={notes} placeholder="Notes" className="input-notes" onChange={this.handleChange}/>
          </div>
        </form>
        <button type="button">Save</button>
      </>
    );
  }
}

export default ResourceForm;
