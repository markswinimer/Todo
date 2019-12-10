import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
  render() {
    this.state = {
      zero: "ZERO"
    }
    return(
      <div className="Todo">
        Todo Component
        <h1>Todo</h1>
        <h1>LIST</h1>
        {this.state.zero}
      </div>
    )
  }
}
export default Todo;
