import { Component } from "react";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

export default class Contents extends Component {

  constructor(props){
    super(props);
    this.state = {
      itemNum:0,
      items: []
    }
  }

  deleteItem(num){
    const selected = document.querySelector('#todo-item'+num);
    if(selected){
      selected.remove();
    }
  }

  updateItem(num){
    
  }

  addItem() {
    const inputText = document.querySelector('#inputText');
    if(inputText.value){
      const tempArr = [...this.state.items];
      tempArr.push(<TodoListItem
        id={this.state.itemNum++}
        text={inputText.value}
        delete={(num)=>{this.deleteItem(num)}}
      />);
      this.setState({
        items: tempArr
      })
      inputText.value = ""
    }
  }

  render() {
    return (
      <div>
        <input autoComplete="off" id="inputText" data-testid="new-todo-input" type="text" placeholder="입력"></input>
        <input type="button" value="추가" data-testid="new-todo-add-button"
          onClick={()=>{this.addItem()}}/>
        <TodoList items ={this.state.items} />
      </div>
    )
  }
}