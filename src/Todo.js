import React, { Component } from 'react';
import Item from './Item';
import ItemForm from './ItemForm';
import "./Todo.css";

class Todo extends Component {
  render() {
    this.state = {
      list: ["one"]
    }
    return(
      <div className="Todo">
        <h1 className="Todo-Title">Todo List</h1>
        <Item />
        <Item />
        <ItemForm />
        {/* <div className="Todo-ribbon"></div> */}
      </div>
    )
  }
}
export default Todo;
