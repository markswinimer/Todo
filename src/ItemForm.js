import React, { Component } from 'react';
import './ItemForm.css';

class ItemForm extends Component {
  render() {
    return(
      <div className="ItemForm">
        <h2>New Item</h2>
        <div className="ItemForm-input">

        <input placeholder="New Item"></input>
        <button>Add Item</button>
      </div>
      </div>
    )
  }
}
export default ItemForm;
