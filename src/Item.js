import React, { Component } from 'react';
import "./Item.css";

class Item extends Component {
  render() {
    return(
      <div className="Item">
        <p>Go food shopping</p>
        <div className="Item-icons">
          <i className="fas fa-pen"></i>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}
export default Item;
