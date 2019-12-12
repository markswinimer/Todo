import React, { Component } from 'react';
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      item: this.props.item
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleRemove() {
    // Handles disabled state when user deleting item while editing
    if(this.props.editing === true) {
      this.props.toggleEdit();
    }
    this.props.removeItem(this.props.id);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleEdit() {
    this.props.toggleEdit();
    this.setState({ editing: !this.state.editing })
  }

  handleSave(e) {
    e.preventDefault();
      this.props.updateItem(this.props.id, this.state.item);
      this.toggleEdit();
  }

  render() {
    let display;
    if(this.state.editing) {
      display = (
        <div className="Item">
          <form onSubmit={this.handleSave}>
            <input
              type="text"
              name="item"
              value={this.state.item}
              onChange={this.handleChange}
              placeholder={this.state.item}
            />
            <button>Save</button>
          </form>
          <div className="Item-icons">
            <i onClick={this.toggleEdit} className="fas fa-pen"></i>
            <i onClick={this.handleRemove} className="fas fa-trash"></i>
          </div>
        </div>
      )
    } else {
      display = (
        <div className="Item">
          <p>{this.props.item}</p>
          <div className="Item-icons">
            <i onClick={this.toggleEdit} className="fas fa-pen"></i>
            <i onClick={this.handleRemove} className="fas fa-trash"></i>
          </div>
        </div>
      )
    }
    return display;
  }
}
export default Item;
