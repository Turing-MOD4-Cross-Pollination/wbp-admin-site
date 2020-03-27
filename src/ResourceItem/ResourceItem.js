import React from 'react';
import './ResourceItem.css';

export default ({resource}) => {
  const {id, name, website,street,city,state,zip_code,contact,notes,category,subcategory} = resource;
return (
  <tr>
    <td>
      <button type="button" className="save-btn">Save Changes</button>
    </td>
    <td><div contenteditable='true' >
      {name}
      </div>
      </td>
    <td><div contenteditable='true' >
      {website}
      </div>
      </td>
    <td><div contenteditable='true' >
      {street}
      </div>
      </td>
    <td><div contenteditable='true' >
      {city}
      </div>
      </td>
    <td><div contenteditable='true' >
      {state}
      </div>
      </td>
    <td><div contenteditable='true' >
      {zip_code}
      </div>
      </td>
    <td><div contenteditable='true' >
      {contact}
      </div>
      </td>
    <td><div contenteditable='true' >
      {notes}
      </div>
      </td>
    <td><div contenteditable='true' >
      {category}
      </div>
      </td>
    <td><div contenteditable='true' >
      {subcategory}
      </div>
      </td>
  </tr>
);
}