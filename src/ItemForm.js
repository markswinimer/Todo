import React, { Component } from 'react';
import './ItemForm.css';
import uuid from 'uuid/v4';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // Disallows the creation of new items if another is being edited
    // Disallows the submission of an empty field
    if(!this.props.editing & (this.state.item !== "")) {
      this.props.createItem({...this.state, id: uuid()});
      this.setState({
        item: ""
      });
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="ItemForm">
        <label>New Item</label>
        <div className="ItemForm-input">
          <input
            type='text'
            placeholder='New Item'
            id='item'
            name='item'
            value={this.state.item}
            onChange={this.handleChange}
          />
          <button disabled={this.props.editing}>Add Item</button>
        </div>
      </form>
    )
  }
}
export default ItemForm;
