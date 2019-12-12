import React, { Component } from 'react';
import Item from './Item';
import ItemForm from './ItemForm';
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      editing: false
    }
    this.createItem = this.createItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  createItem(newItem) {
    this.setState({
      list: [...this.state.list, newItem]
    })
  }
  removeItem(id) {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  updateItem(id, newItem) {
    const newList = this.state.list.map( item => {
      if(item.id === id) {
        return {...item, item: newItem}
      }
      return item;
    })
    this.setState({
      list: newList
    });
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    let items = this.state.list.map(i => {
      return (
        <Item
          key={i.id}
          id={i.id}
          item={i.item}
          removeItem={this.removeItem}
          updateItem={this.updateItem}
          toggleEdit={this.toggleEdit}
          editing={this.state.editing}
        />)
    })

    return(
      <div className="TodoList">
        <h1 className="TodoList-Title">TodoList List</h1>
        {items}
        <ItemForm editing={this.state.editing} createItem={this.createItem}/>
        {/* <div className="TodoList-ribbon"></div> */}
      </div>
    )
  }
}
export default TodoList;
