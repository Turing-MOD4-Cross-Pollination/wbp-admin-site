import React from 'react';
import './ResourceItem.css';

export default ({resource}) => {
  console.log(resource)
  const {name, website,street,city,state,zip_code,contact,notes,category,subcategory} = resource;
return (
  <tr>
    <td>
      <button type="button" className="save-btn">Save Changes</button>
    </td>
    <td>{name}</td>
    <td>{website}</td>
    <td>{street}</td>
    <td>{city}</td>
    <td>{state}</td>
    <td>{zip_code}</td>
    <td>{contact}</td>
    <td>{notes}</td>
    <td>{category}</td>
    <td>{subcategory}</td>
  </tr>
);
}