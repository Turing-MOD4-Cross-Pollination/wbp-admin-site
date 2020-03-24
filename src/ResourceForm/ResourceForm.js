import React, { Component } from 'react';
import './ResourceForm.css';

class ResourceForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      website: '',
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
        <form
          acceptCharset='UTF-8'
          autoComplete='off'
        >
          <label htmlFor='name'>Name</label>
          <input name='name' type='text' value={name} onChange={this.handleChange} required/>
          <label htmlFor='website'>Website</label>
          <input name='website' type='text' value={website} onChange={this.handleChange}/>
          <label htmlFor='street'>Street</label>
          <input name='street' type='text' value={street} onChange={this.handleChange}/>
          <label htmlFor='city'>City</label>
          <input name='city' type='text' value={city} onChange={this.handleChange}/>
          <label htmlFor='state'>State</label>
          <input name='state' type='text' value={state} onChange={this.handleChange}/>
          <label htmlFor='zipCode'>Zip Code</label>
          <input name='zipCode' type='text' value={zipCode} onChange={this.handleChange}/>
          <label htmlFor='contact'>Contact</label>
          <input name='contact' type='text' value={contact} onChange={this.handleChange}/>
          <label htmlFor='notes'>Notes</label>
          <input name='notes' type='text' value={notes} onChange={this.handleChange}/>
          <label htmlFor='category'>Category</label>
          <input name='category' type='text' value={category} onChange={this.handleChange} required/>
          <label htmlFor='subcategory'>Subcategory</label>
          <input name='subcategory' type='text' value={subcategory} onChange={this.handleChange}/>
        </form>
        <button>Save</button>
      </>
    );
  }
}

export default ResourceForm;
